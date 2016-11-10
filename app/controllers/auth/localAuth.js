/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    validator = require('validator');

var l12n = require("../../l12n/module"),
    _ = new l12n().translate;

var User = require('../../services/Users');

var strategyParams = {
    usernameField: 'email',
    passReqToCallback: true,
    session: false
};

passport.use(new LocalStrategy(strategyParams, callback));


/**
 * @param {Object} req
 * @param {String} email
 * @param {String} password
 * @param {Function} done
 *
 * @return {Function}
 **/
function callback(req, email, password, done) {

    if(req.originalUrl == "/login"){
        User.findUserByEmail(email, password).then(function(data){
            if(data !== null){
                return done(null, data.id);
            }else{
                return done(null, false, req.flash('message', _('Incorrect email or password')));
            }
        });
    }else{
        User.findUsedEmail(email).then(function(data){
            if(data == null){
                if(validator.isEmail(email) && !validator.isEmpty(password)){
                    User.createUser('local', null, email, null, null, password).then(function(dd){
                        return done(null, dd.id);
                    }, function(err){
                        return done(null, false, req.flash('message', _("Internal error. Try later, please")));
                    });
                }else{
                    return done(null, false, req.flash('message', _('Incorrect email or password')));
                }
            }else{
                return done(null, false, req.flash('message', _('Your email was registered! Please, log in')));
            }
        });
    }

}

module.exports = passport;