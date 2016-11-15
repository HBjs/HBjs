/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var TagsModel = require('../models/Tags'),
    Q = require('q');

var Stories = {

    /**
     * @description Creating tag
     *
     * @param {String} title
     * @returns {Object}
     *
     **/
    createTag : function createTag(title){
        var deferred = Q.defer();

        TagsModel.create(
            {
                title : title
            }
        ).then(function(tag){
                return deferred.resolve(tag);
            });


        return deferred.promise;
    },

    /**
     * @description Getting tag by id
     *
     * @param {Number} id
     * @returns {Object}
     *
     **/
    getTagById : function getTagById(id){
        var deferred = Q.defer();

        TagsModel.findById(id).then(function(story){
            return deferred.resolve(story);
        }).catch(function(err){
                deferred.reject(err);
            });


        return deferred.promise;
    }
};

module.exports = Stories;