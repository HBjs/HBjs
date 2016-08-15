/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var express = require('express'),
    path = require('path'),
    consolidate = require('consolidate'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var routes = require("./app/routes/");



/**
 * Initialize app
 */
var app = express();


/**
 * Injection modules
 */

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('swig', consolidate.swig);
app.set('view engine', 'swig');
app.set('views', './app/views');

app.use(function(req, res, next){ res.set("x-powered-by", "HB.js"); next(); });

/**
 * Injection routes
 */
app.use(routes);


module.exports = app;