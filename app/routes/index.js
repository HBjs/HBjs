/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var pagesRoute = require("./backend/index");
var auth = require("./backend/auth");
var account = require("./backend/account");

module.exports = [pagesRoute, auth, account];
