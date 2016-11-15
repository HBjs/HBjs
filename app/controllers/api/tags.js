/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var Tag = require("../../services/Tags");

var l12n = require("../../l12n/module"),
    _ = new l12n().translate;


var TagController = {
    createTag : function createTag(req, res){
        var result = {
            error : false
        };

        if(req.user && req.user.role == 3){
            var title = req.body.title || null;

            if(title !== null){
                Tag.createTag(title).then(function(tag){
                    result.message = _("Tag was created!");
                    result.id = tag.id;
                    res.json(result);
                });
            }else{
                result.error = true;
                result.message = _("Title is required!");
                res.json(result);
            }

        }else{
            result.error = true;
            result.message = _("Action forbidden!");
            res.json(result);
        }


    },
    getTagById : function getTagById(req, res){

        var result = {
            error : false
        };

        if(req.user && req.user.role == 3){
            Tag.getTagById(req.params.id).then(function(tag){
                res.json(tag);
            });
        }else{
            result.error = true;
            result.message = _("Action forbidden! Please, auth.");
            res.json(result);
        }
    }
};

module.exports = TagController;