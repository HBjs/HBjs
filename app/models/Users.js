/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var Sequelize = require('sequelize'),
    sequelize = require('../common/mysql');

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


module.exports = UserModel;