/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var configs = require('../../../configs');

var Users = require("../../services/Users");

var params = {
    clientID: configs.auth.google.key,
    clientSecret: configs.auth.google.secret,
    callbackURL: configs.auth.google.callback
};

passport.use(new GoogleStrategy(params, function(token, tokenSecret, profile, done) {
        Users.findUserBySocialId("google", profile.id).then(function(res){
            if(res == null){
                var _name = profile.displayName.split(" "),
                    firstName = (_name.length == 2) ? _name[0] : profile.displayName,
                    lastName = (_name.length == 2) ? _name[1] : "";

                Users.createUser("google", profile.id, null, firstName, lastName, null).then(function(_res){
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