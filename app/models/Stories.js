/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var Sequelize = require('sequelize'),
    sequelize = require('../common/mysql');

var StoryTags = require('./StoryTags');
var Tags = require('./Tags');

var StoryModel = sequelize.define('stories', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },

    /**
     * Author id
     * {Number} author
     **/
    author : {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment : 'author id'
    },

    /**
     * Story status:
     * 1 - published
     * 2 - draft
     * 3 - moderation
     *
     * {Number} status
     **/
    status : {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment : 'story status'
    },

    /**
     * Story title
     *
     * {String} title
     **/
    title : {
        type: Sequelize.STRING,
        allowNull: false,
        comment : 'story title'
    },

    /**
     * Story description (SEO)
     *
     * {String} description
     **/
    description : {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'story description'
    },

    /**
     * Story keywords (SEO)
     *
     * {String} keywords
     **/
    keywords : {
        type: Sequelize.STRING,
        allowNull: true,
        comment : 'story keywords'
    },

    /**
     * Story preview (small description)
     *
     * {String} preview
     **/
    preview : {
        type: Sequelize.TEXT,
        allowNull: true,
        comment : 'story preview'
    },

    /**
     * Story content (markdown text)
     *
     * {String} content
     **/
    content : {
        type: Sequelize.TEXT,
        allowNull: true,
        comment : 'story content'
    },

    /**
     * Count views
     *
     * {Number} count_views
     **/
    count_views : {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment : 'count views'
    },

    /**
     * Count likes (cached value)
     *
     * {Number} count_likes
     **/
    count_likes : {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment : 'count likes'
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

StoryModel.belongsToMany(Tags, {
    through: {
        model: StoryTags
    },
    otherKey: 'tag_id',
    foreignKey: 'story_id',
    constraints: false
});

module.exports = StoryModel;