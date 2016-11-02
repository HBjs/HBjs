/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var IndexRoute = require("./backend/index");
var PagesRoute = require("./backend/posts");
var LoginRoute = require("./backend/login");
var SignInRoute = require("./backend/signIn");
var googleAuthRoute = require("./auth/googleAuth");
var twitterAuthRoute = require("./auth/twitterAuth");
var facebookAuthRoute = require("./auth/facebookAuth");
var localAuthRoute = require("./auth/localAuth");

module.exports = [IndexRoute, PagesRoute, LoginRoute, SignInRoute, googleAuthRoute, twitterAuthRoute, facebookAuthRoute, localAuthRoute];
