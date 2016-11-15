/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';


/**
 * Backend
 **/

var pagesRoute = require("./backend/index");
var auth = require("./backend/auth");
var account = require("./backend/account");


/**
 * API
 **/

var stories = require("./api/stories");
var user = require("./api/user");

/**
 * Admin actions
 **/
var tags = require("./api/tags");

module.exports = [pagesRoute, auth, account, stories, user, tags];
