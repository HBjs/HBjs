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
     * @description Creating user
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
            UserModel.create(
                {
                    type : "local",
                    email : email,
                    role : 1,
                    password : crypto.createHash('md5').update(password).digest("hex"),
                    lastAuth : Date.now() / 1000,
                    timeCreate : Date.now() / 1000
                }
            ).then(function(data){
                    return deferred.resolve(data);
                }).catch(function(err){
                    return deferred.reject(err);
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
                }).catch(function(err){
                    return deferred.reject(err);
                });
        }

        return deferred.promise;
    },

    /**
     * @param type {String} type of auth strategy (twitter, facebook, google)
     * @param id {Number} uid user (twitter, facebook, google)
     *
     * @description Find user by id (twitter, facebook, google)
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
     * @param email {String}
     * @param password {String}
     *
     * @description Find user by email
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
     * @param email {String}
     *
     * @description Find used email
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
     * @param id {Number}
     *
     * @description Getting user by id
     *
     **/

    getUserById : function getUserById(id){
        var deferred = Q.defer();

        var conditions = {
            where : {
                id:id
            }
        };

        UserModel.findOne(conditions).then(function(res){
            deferred.resolve(res);
        });

        return deferred.promise;
    }
};





module.exports = Users;