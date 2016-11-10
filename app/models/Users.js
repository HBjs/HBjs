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
     * id {Number} autoincrement
     **/
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },

    /**
     * type {String} auth strategy (local, twitter, facebook, google)
     **/
    type: {
        type: Sequelize.STRING,
        comment : 'type auth strategy (local, twitter, facebook, google)'
    },

    /**
     * uid {String} social id for auth strategy
     **/
    uid: {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'social id for auth strategy'
    },

    /**
     * role {Number} user role:
     * 1 - read only
     * 2 - editor
     * 3 - account
     **/
    role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment : 'social id for auth strategy'
    },

    /**
     * email {String} user email (local strategy)
     **/
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'user email (local strategy)'
    },

    /**
     * firstName {String} user first name
     **/
    firstName: {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'user first name'
    },

    /**
     * lastName {String} user last name
     **/
    lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'user last name'
    },

    /**
     * password {String} hashed user password (local strategy)
     **/
    password: {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'hashed user password (local strategy)'
    },

    /**
     * lastAuth {Number} last auth time (TIMESTAMP)
     **/
    lastAuth: {
        type: Sequelize.INTEGER,
        comment : 'last auth time (TIMESTAMP)'
    },

    /**
     * timeCreate {Number} time create (TIMESTAMP)
     **/
    timeCreate: {
        type: Sequelize.INTEGER,
        comment : 'time create (TIMESTAMP)'
    }
}, {
    createdAt: false,
    updatedAt: false,
    charset : "utf8"
});


module.exports = UserModel;