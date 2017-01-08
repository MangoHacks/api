const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const LocalStrategy   = require('passport-local').Strategy;
const User = require('../data/user').model;

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => {
  User.findById(id, (err, user) => done(err, user));
});


function create({email, password, done}){
  User.findOne({ 'local.email' :  email }, (err, user) => {
    if (err){return done(err);}
    if (user) {
      return done(null, false, {msg:'That email is already taken.'});
    }

    let usr = new User();
    usr.local.email= email;
    usr.local.password = usr.generateHash(password);
    usr.save((err) => done(err, usr));
  });
}

function login({email, password, done}){
  User.findOne({ 'local.email' :  email }, function(err, user) {
    if (err)
      return done(err);
    if (!user)
      return done(null, false, {message:'No user found.'});
    if (!user.validatePassword(password))
      return done(null, false, {message:'Oops! Wrong password.'}); 

    return done(null, user);
  });
}

passport.use('github', new GitHubStrategy({
    clientID: '09a41c5e51631b38b44b',
    clientSecret: '2c94f50a8624615401aab69cbefc9132e478db81',
    callbackURL: "http://localhost:5000/api/auth/callback"
  }, (accessToken, refreshToken, profile, done) => {
    const {id, username, profileUrl, displayName, emails} = profile;
    User.findOne({'github.id': id}, (err, user) => {
      if (user)
        return done(null, user);

      const name = displayName.split(' ');
      const usr = new User({
        first: name[0],
        last: name[1],
        email: emails[0].value,
        profile_img: profileUrl,
        github: {id, username}
      });
      usr.save()
        .then((u) => done(null, u))
        .catch(err => done(err));
    });
  }
));

// by default, local strategy uses username and password, we will override with email
passport.use('local-signup', new LocalStrategy({
  usernameField : 'email', 
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
},(req, email, password, done) => create({email, password, done}) ));

passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
},(req, email, password, done) => login({email, password, done})));


const local = {
  signup: passport.authenticate('local-signup',{ failureRedirect : '/signup'})
};
const github = {
  login: passport.authenticate('github', { scope: [ 'user:email' ] }),
  callback: passport.authenticate('github', { failureRedirect: '/login' })
};

module.exports = {local, github};