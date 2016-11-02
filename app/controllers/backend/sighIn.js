/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var IndexController = function(req, res){
    res.render('signIn', {
        flash : req.flash('message') || ""
    });
};

module.exports = IndexController;

