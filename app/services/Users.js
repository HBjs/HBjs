/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var UserModel = require('../models/Users'),
    Q = require('q'),
    crypto = require('crypto');


var Users = {

    /**
     * @param type {String} type of user (local, twitter, facebook, google)
     * @param uid {Number} uid user (if type of is twitter, facebook, google)
     * @param email {String} email user (user login in local case)
     * @param firstName {String} First Name (twitter, facebook, google)
     * @param lastName {String} Last Name (twitter, facebook, google)
     * @param password {String} user password (local)
     *
     **/

    createUser : function createUser(type, uid, email, firstName, lastName, password){
        var deferred = Q.defer();
        switch(type){
            case "local" : createLocal(email, password);
                break;
        }

        function createLocal(email, password){
            UserModel.create(
                {
                    type : "local",
                    email : email,
                    password : crypto.createHash('md5').update(password).digest("hex"),
                    lastAuth : Date.now() / 1000,
                    timeCreate : Date.now() / 1000
                }
            ).then(function(data){
                    return deferred.resolve(true);
                }).catch(function(err){
                    return deferred.reject(err);
                });
        }

        return deferred.promise;
    }
};





module.exports = Users;