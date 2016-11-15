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
     * @description Creating user
     *
     * @param {String} type
     * @param {(Number | null)} uid
     * @param {(String | null)} email
     * @param {(String | null)} firstName
     * @param {(String | null)} lastName
     * @param {(String | null)} password
     * @returns {Object}
     *
     **/

    createUser : function createUser(type, uid, email, firstName, lastName, password){
        var deferred = Q.defer();

        switch(type){
            case "local" : createLocal(email, password);
                break;
            case "facebook" : socialCreate("facebook", uid, firstName, lastName);
                break;
            case "twitter" : socialCreate("twitter", uid, firstName, lastName);
                break;
            case "google" : socialCreate("google", uid, firstName, lastName);
                break;
        }

        function createLocal(email, password){
            var cryptedPassword;

            try{
                cryptedPassword = crypto.createHash('md5').update(password).digest("hex");
            }catch (e){
                return deferred.reject(e);
            }

            UserModel.create(
                {
                    type : "local",
                    email : email,
                    role : 1,
                    password : cryptedPassword,
                    lastAuth : Date.now() / 1000,
                    timeCreate : Date.now() / 1000
                }
            ).then(function(data){
                    return deferred.resolve(data);
                });
        }

        function socialCreate(type, uid, firstName, lastName){
            UserModel.create(
                {
                    uid : uid,
                    type : type,
                    role : 1,
                    firstName : firstName,
                    lastName : lastName,
                    lastAuth : Date.now() / 1000,
                    timeCreate : Date.now() / 1000
                }
            ).then(function(data){
                    return deferred.resolve(data);
                });
        }

        return deferred.promise;
    },

    /**
     * @description Find user by id (twitter, facebook, google)
     *
     * @param {String} type - type of auth strategy (twitter, facebook, google)
     * @param {Number} id - uid user (twitter, facebook, google)
     * @returns {(Object | null)}
     *
     **/

    findUserBySocialId : function findUserBySocialId(type, id){
        var deferred = Q.defer();

        var conditions = {
            where : {
                type:type,
                uid : id
            }
        };

        UserModel.findOne(conditions).then(function(res){
            deferred.resolve(res);
        });

        return deferred.promise;
    },

    /**
     * @description Find user by email
     *
     * @param {String} email
     * @param {String} password
     * @returns {(Object | null)}
     *
     **/

    findUserByEmail : function findUserByEmail(email, password){
        var deferred = Q.defer();

        var conditions = {
            where : {
                type:"local",
                email : email,
                password :  crypto.createHash('md5').update(password).digest("hex")
            }
        };

        UserModel.findOne(conditions).then(function(res){
            deferred.resolve(res);
        });

        return deferred.promise;
    },

    /**
     * @description Find used email
     *
     * @param {String} email
     * @returns {(Object | null)}
     *
     **/

    findUsedEmail : function findUsedEmail(email){
        var deferred = Q.defer();

        var conditions = {
            where : {
                type:"local",
                email : email
            }
        };

        UserModel.findOne(conditions).then(function(res){
            deferred.resolve(res);
        });

        return deferred.promise;
    },

    /**
     * @description Getting user by id
     *
     * @param {Number} id
     * @returns {(Object | null)}
     *
     **/

    getUserById : function getUserById(id){
        var deferred = Q.defer();

        UserModel.findById(id,
            {
                attributes : {
                    exclude : ["password", "lastAuth", "timeCreate", "email"]
                }
            }
        ).then(function(res){
            deferred.resolve(res);
        });

        return deferred.promise;
    }
};





module.exports = Users;