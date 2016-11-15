/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var Story = require("../../services/Stories");

var L12n = require("../../l12n/module"),
    _ = new L12n().translate;


var StoryController = {
    createStory : function createStory(req, res){
        var result = {
            error : false
        };

        if(!req.user){
            result.error = true;
            result.message = _("Action forbidden! Please, auth.");
            res.json(result);
        }else{

            var title = req.body.title || null,
                status = req.body.status || null,
                description = req.body.description || null,
                keywords = req.body.keywords || null,
                preview = req.body.keywords || null,
                content = req.body.content || null,
                tags = req.body.tags || null;

            if(title !== null){

                if(status !== null && status == 1 && ( req.user.role == 2 || req.user.role == 3)){
                    status = 1;
                }else if(status !== null && status == 1 && req.user.role == 1){
                    status = 3;
                }else if((status !== null && status == 2 ) || (status === null)){
                    status = 2;
                }

                var preparedTags;

                if(Array.isArray(tags)){
                    preparedTags = tags;
                }else if(typeof tags === 'string'){
                    preparedTags = [tags];
                }

                Story.createStory(req.user.id, status, title, description, keywords, preview, content, preparedTags).then(function(response){
                    result.message = _("Story was created!");
                    result.id = response.id;
                    res.json(result);
                });

            }else{
                result.error = true;
                result.message = _("Title is required!");

                res.json(result);
            }


        }


    },
    getStoryById : function getStoryById(req, res){

        var result = {
            error : false
        };

        if(!req.user){
            result.error = true;
            result.message = _("Action forbidden! Please, auth.");
            res.json(result);
        }else{
            Story.getStoryById(req.params.id).then(function(story){

                if(req.user.role == 3 || req.user.role == story.author){
                    res.json(story);
                }else{
                    result.error = true;
                    result.message = _("Action forbidden!");
                    res.json(result);
                }

            });
        }
    }
};

module.exports = StoryController;