/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var User = require("../../services/Users");

var passport = {
    /**
     * @param id {Number} user id
     * @param done {Function} callback
     * @return {Function}
     **/
    serialize : function serialize(id, done){
        return done(null, id);
    },

    /**
     * @param id {Number} user id
     * @param done {Function} callback
     * @return {Function}
     **/
    deserialize : function deserealize(id, done){
        User.getUserById(id).then(function(data){
            return done(null, {
                id : data.id,
                type : data.type,
                role : data.role,
                firstName : data.firstName,
                lastName : data.lastName,
                email : data.email
            });
        });
    },

    /**
     * @param app {Object}
     * @return {Function}
     **/
    userInit : function userInit(app){
        return function (req, res, next){
            app.locals.isAuth = (req.user) ? true : false;
            app.locals.user = (req.user) ? req.user : {};

            return next();
        }
    }
};

module.exports = passport;