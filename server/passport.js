const passport = require("passport");
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});


passport.use(new GoogleStrategy({
    clientID: "99576376017-8sak7b2ude89b8lkdauim18knilj3cpm.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8080/google/callback",
    passReqToCallback: true
},
function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
}
));