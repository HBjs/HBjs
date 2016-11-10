/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var IndexController = function(req, res){
    if(req.user){
        res.render('account/index');
    }else{
        res.redirect("/");
    }

};

module.exports = IndexController;

