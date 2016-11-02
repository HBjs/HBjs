/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    validator = require('validator');

var User = require('../../models/Users');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true,
    session: false
},
    function(req, username, password, done) {
        /*User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });*/

        if(validator.isEmail(username) && validator.notEmpty(password)){
            User.createUser('local', null, username, null, null, password).then(function(dd){
                return done(null, dd);
            }, function(err){
                return done(null, false, req.flash('message', err));
            });
        }else{
            return done(null, false, req.flash('message', 'Incorrect email or password'));
        }


    }
));

module.exports = passport;