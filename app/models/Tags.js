/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var Sequelize = require('sequelize'),
    sequelize = require('../common/mysql');

var TagModel = sequelize.define('tags', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },

    /**
     * Tag title
     * {String} title
     **/
    title : {
        type: Sequelize.STRING,
        allowNull: false,
        comment : 'tag title'
    }
}, {
    createdAt: false,
    updatedAt: false,
    charset : "utf8"
});

module.exports = TagModel;