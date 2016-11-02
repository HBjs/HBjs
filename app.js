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
    l12n = require('./app/l12n/module');

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
app.use(ConnectFlash());

app.engine('swig', consolidate.swig);
app.set('view engine', 'swig');
app.set('views', './app/views');

app.use(function(req, res, next){ res.set("x-powered-by", "HB.js"); next(); });



/**
 * L12n initialization
 */

l12n.module().then(function(_){
    app.locals.translate = _.translate;
});


app.use(session({
    store: new RedisStore({ }),
    secret: "KUHIuhjkjhUIUYIuhi",
    resave: false,
    name : 'SID',
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    return done(null, user);
});

passport.deserializeUser(function(id, done) {
    console.log(id);
    done(null, { id : id});
});

/**
 * Injection routes
 */
app.use(routes);


module.exports = app;