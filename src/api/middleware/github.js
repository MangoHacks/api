const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.use(new GitHubStrategy({
    clientID: '09a41c5e51631b38b44b',
    clientSecret: '2c94f50a8624615401aab69cbefc9132e478db81',
    callbackURL: "http://mango-api.herokuapp.com/api/auth/callback"
  }, (accessToken, refreshToken, profile, done) => {
  	console.log(`User data from github: \n ${profile}`)
    //create or find user
    done(null, profile);
  }
));

const login = passport.authenticate('github', { scope: [ 'user:email' ] });
const callback = passport.authenticate('github', { failureRedirect: '/login' });

module.exports = {login, callback};