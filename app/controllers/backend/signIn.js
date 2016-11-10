/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var Controller = function(req, res){

    if(!req.user){
        res.render('signIn', {
            flash : req.flash('message') || ""
        });
    }else{
        res.redirect("/");
    }
};

module.exports = Controller;

