/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var Sequelize = require('sequelize'),
    sequelize = require('../common/mysql');

var StoryTagsModel = sequelize.define('story_tags', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },

    /**
     * Story id
     * {Number} story_id
     **/
    story_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment : 'story id'
    },

    /**
     * Tag id
     * {Number} tag_id
     **/
    tag_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment : 'tag id'
    }
}, {
    createdAt: false,
    updatedAt: false,
    charset : "utf8"
});

module.exports = StoryTagsModel;