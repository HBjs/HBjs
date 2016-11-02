/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var configs = require('../../../configs');

var params = {
    clientID: configs.auth.facebook.clientID,
    clientSecret: configs.auth.facebook.secret,
    callbackURL: configs.auth.facebook.callback
};

passport.use(new FacebookStrategy(params, function(token, tokenSecret, profile, done) {
        /*console.log(token);
        console.log(tokenSecret);*/
        console.log(profile);

        done(null, profile.id);
    }
));

module.exports = passport;