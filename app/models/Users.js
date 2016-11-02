var Sequelize = require('sequelize'),
    sequelize = require('../common/mysql'),
    Q = require('q'),
    crypto = require('crypto');

var UserModel = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING
    },
    uid: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastAuth: {
        type: Sequelize.INTEGER
    },
    timeCreate: {
        type: Sequelize.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});


var Users = {
    createUser : createUser
};

/**
 * @param type {String} type of user (local, twitter, facebook, google)
 * @param uid {Number} uid user (if type of is twitter, facebook, google)
 * @param email {String} email user (user login in local case)
 * @param firstName {String} First Name (twitter, facebook, google)
 * @param lastName {String} Last Name (twitter, facebook, google)
 * @param password {String} user password (local)
 *
 **/

function createUser(type, uid, email, firstName, lastName, password){
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



module.exports = Users;