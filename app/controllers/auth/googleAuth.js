/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var configs = require('../../../configs');

var params = {
    clientID: configs.auth.google.key,
    clientSecret: configs.auth.google.secret,
    callbackURL: configs.auth.google.callback
};

passport.use(new GoogleStrategy(params, function(token, tokenSecret, profile, done) {
        /*console.log(token);
        console.log(tokenSecret);*/
        //console.log(profile);

        done(null, profile.id);
    }
));

module.exports = passport;