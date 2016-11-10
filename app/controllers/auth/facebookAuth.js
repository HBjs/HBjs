/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

var Users = require("../../services/Users");

var configs = require('../../../configs');

var params = {
    clientID: configs.auth.facebook.clientID,
    clientSecret: configs.auth.facebook.secret,
    callbackURL: configs.auth.facebook.callback
};

passport.use(new FacebookStrategy(params, function(token, tokenSecret, profile, done) {

        Users.findUserBySocialId("facebook", profile.id).then(function(res){
            if(res == null){
                var _name = profile.displayName.split(" "),
                    firstName = (_name.length == 2) ? _name[0] : profile.displayName,
                    lastName = (_name.length == 2) ? _name[1] : "";

                Users.createUser("facebook", profile.id, null, firstName, lastName, null).then(function(_res){
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