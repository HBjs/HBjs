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
    bodyParser = require('body-parser'),
    session = require('express-session'),
    RedisStore = require('connect-redis')(session),
    ConnectFlash = require('connect-flash'),
    passport = require('passport'),
    passport_common = require('./app/common/passport'),
    L12n = require('./app/l12n/module');

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
app.use(new ConnectFlash());

app.engine('swig', consolidate.swig);
app.set('view engine', 'swig');
app.set('views', './app/views');

app.use(function(req, res, next){ res.set("x-powered-by", "HB.js"); next(); });


/**
 * L12n initialization
 */

app.locals._ = new L12n().translate;


/**
 * Passport initialization
 **/

app.use(session({
    store: new RedisStore({ }),
    secret: "KUHIuhjkjhUIUYIuhi",
    resave: false,
    name : 'SID',
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(passport_common.serialize);
passport.deserializeUser(passport_common.deserialize);

app.use(passport_common.userInit(app));



/**
 * Injection routes
 */
app.use(routes);


module.exports = app;