/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var User = require("../../services/Users");

var l12n = require("../../l12n/module"),
    _ = new l12n().translate;


var UserController = {
    getUserById : function getUserById(req, res){

        var result = {
            error : false
        };

        if(req.user){
            User.getUserById(Number(req.params.id)).then(function(tag){
                res.json(tag);
            });
        }else{
            result.error = true;
            result.message = _("Action forbidden! Please, auth.");
            res.json(result);
        }
    },
    getUserProfile : function getUserProfile(req, res){

        var result = {
            error : false
        };

        if(req.user){
            User.getUserById(Number(req.user.id)).then(function(tag){
                res.json(tag);
            });
        }else{
            result.error = true;
            result.message = _("Action forbidden! Please, auth.");
            res.json(result);
        }
    }
};

module.exports = UserController;