import config from 'config';
import passport from 'passport';
const GitHubStrategy = require('passport-github2').Strategy;
const LocalStrategy   = require('passport-local').Strategy;
import User from './models/user';
const github_opts = config.get('App.github');

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => {
  User.findById(id, (err, user) => done(err, user));
});

passport.use('github', new GitHubStrategy(github_opts, (accessToken, refreshToken, profile, done) => {
  const {id, username, profileUrl, displayName, emails, avatarUrl} = profile;
  User.findOne({'github.id': id}, (err, user) => {
    if (user)
      return done(null, user);

    const name = displayName.split(' ');
    const usr = new User({
      first: name[0],
      last: name[1],
      email: emails[0].value,
      profile_img: avatarUrl,
      status: 'registered',
      github: {id, username, profileUrl}
    });
    usr.save()
      .then((u) => done(null, u))
      .catch(err => done(err));
  });
}));

// by default, local strategy uses username and password, we will override with email
passport.use('local-signup', new LocalStrategy({
  usernameField : 'email', 
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
}, (req, email, password, done) => {
  console.log('1')
  User.findOne({'local.email' :  email}, (err, user) => {
    if (err) {console.log('2'); return done(err);}
    if (user) {console.log('3'); return done(null, false, {msg:'That email is already taken.'}); } 
    console.log('4')
    const usr = new User(req.body);
    usr.local = {email, password: usr.generateHash(password)};
    usr.save((err) => done(err, usr));
  });
}));

passport.use('local-login', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true
}, (req, email, password, done) => {
  User.findOne({ 'local.email' :  email }, (err, user) => {
    if (err)
      return done(err);
    if (!user)
      return done(null, false, {message:'No user found.'});
    if (!user.validatePassword(password))
      return done(null, false, {message:'Oops! Wrong password.'}); 

    return done(null, user);
  });
}));


const local = {
  login: passport.authenticate('local-login',{failWithError: false})
};
const github = {
  login: passport.authenticate('github', { scope: [ 'user:email' ] }),
  callback: passport.authenticate('github', { failureRedirect: '/å' })
};

export {local, github};