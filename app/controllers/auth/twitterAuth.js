/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy;

var configs = require('../../../configs');

var Users = require("../../services/Users");

var params = {
    consumerKey: configs.auth.twitter.consumerKey,
    consumerSecret: configs.auth.twitter.secret,
    callbackURL: configs.auth.twitter.callback
};

passport.use(new TwitterStrategy(params, function(token, tokenSecret, profile, done) {

        Users.findUserBySocialId("twitter", profile.id).then(function(res){
            if(res == null){
                var _name = profile.displayName.split(" "),
                    firstName = (_name.length == 2) ? _name[0] : profile.displayName,
                    lastName = (_name.length == 2) ? _name[1] : "";

                Users.createUser("twitter", profile.id, null, firstName, lastName, null).then(function(_res){
                    return done(null,_res.id);
                }, function(err){
                    return done(null, null);
                });
            }else{
                return done(null, res.id);
            }
        });
    }
));

module.exports = passport;