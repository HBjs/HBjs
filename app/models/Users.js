/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var Sequelize = require('sequelize'),
    sequelize = require('../common/mysql');

var UserModel = sequelize.define('users', {
    /**
     * {Number} id
     **/
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },

    /**
     * auth strategy type (local, twitter, facebook, google)
     *
     * {String} type
     **/
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        comment : 'auth strategy type (local, twitter, facebook, google)'
    },

    /**
     * social id for auth strategy
     *
     * {String} uid
     **/
    uid: {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'social id for auth strategy'
    },

    /**
     * user role:
     * 1 - read only
     * 2 - editor
     * 3 - admin
     *
     * {Number} role
     **/
    role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment : 'user role'
    },

    /**
     * user email (local strategy)
     *
     * {String} email
     **/
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'user email (local strategy)'
    },

    /**
     * user first name
     *
     * {String} firstName
     **/
    firstName: {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'user first name'
    },

    /**
     * user last name
     *
     * {String} lastName
     **/
    lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'user last name'
    },

    /**
     * hashed user password (local strategy)
     *
     * {String} password
     **/
    password: {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'hashed user password (local strategy)'
    },

    /**
     * last auth time (TIMESTAMP)
     *
     * {Number} lastAuth
     **/
    lastAuth: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment : 'last auth time (TIMESTAMP)'
    },

    /**
     * time create (TIMESTAMP)
     *
     * {Number} timeCreate
     **/
    timeCreate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment : 'time create (TIMESTAMP)'
    }
}, {
    createdAt: false,
    updatedAt: false,
    charset : "utf8"
});


module.exports = UserModel;