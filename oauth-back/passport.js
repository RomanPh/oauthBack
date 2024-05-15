const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new GitHubStrategy({
  clientID: "Ov23liylXgoyrkMqWXoK",
  clientSecret: "c14e817a84aa80b7b7c5c299ec2dbdb728f843f2",
  callbackURL: "http://localhost:5000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));