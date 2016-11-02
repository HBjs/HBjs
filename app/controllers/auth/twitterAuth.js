/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

var configs = require('../../../configs');

var params = {
    consumerKey: configs.auth.twitter.consumerKey,
    consumerSecret: configs.auth.twitter.secret,
    callbackURL: configs.auth.twitter.callback
};

passport.use(new TwitterStrategy(params, function(token, tokenSecret, profile, done) {
        /*console.log(token);
        console.log(tokenSecret);*/
        console.log(profile);

        done(null, profile.id);
    }
));

module.exports = passport;