/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var StoryModel = require('../models/Stories'),
    TagsModel = require('../models/Tags'),
    /*StoryTagsModel = require('../models/StoryTags'),*/
    Q = require('q');

var Stories = {

    /**
     * @description Creating story
     *
     * @param {Number} author
     * @param {Number} status
     * @param {String} title
     * @param {(String | null)} description
     * @param {(String | null)} keywords
     * @param {(String | null)} preview
     * @param {(String | null)} content
     * @param {(Array | null)} tags
     * @returns {Object}
     *
     **/
    createStory : function createStory(author, status, title, description, keywords, preview, content, tags){
        var deferred = Q.defer();

        var myStory;

        StoryModel.create(
            {
                author : author,
                status : status,
                title : title,
                description : description || null,
                keywords : keywords || null,
                preview : preview || null,
                content : content || null,
                count_views : 0,
                count_likes : 0,
                timeCreate : Date.now() / 1000
            }
        ).then(function(result){
                myStory = result;

                if(Array.isArray(tags)){
                    myStory.addTags(tags);
                    return myStory.save();
                }else{
                    return myStory;
                }

            }).then(function(){
                deferred.resolve(myStory);
            });


        return deferred.promise;
    },

    /**
     * @description Getting story by id
     *
     * @param {Number} id
     * @returns {Object}
     *
     **/
    getStoryById : function getStoryById(id){
        var deferred = Q.defer();

        StoryModel.findById(id,
            {
                include : [
                    {
                        model : TagsModel,
                        through : {
                            attributes: []
                        }
                    }
                ]

            }
        ).then(function(story){
            return deferred.resolve(story);
        }).catch(function(err){
                deferred.reject(err);
            });


        return deferred.promise;
    }
};

module.exports = Stories;