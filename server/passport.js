const passport = require("passport");
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});


passport.use(new GoogleStrategy({
    clientID: "99576376017-gl3lsbtp7rra4sv281275f38lt9k4sv9.apps.googleusercontent.com", //google credentials
    clientSecret: "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",
    callbackURL: "http://localhost:8080/google/", //user gets redirected to here after successful login;
    passReqToCallback: true
},
function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
}
));