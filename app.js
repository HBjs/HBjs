var express = require('express'),
    path = require('path'),
    consolidate = require('consolidate'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');



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

app.set('views', path.join(__dirname, 'app/views'));
app.engine('html', consolidate.swig);
app.set('view engine', 'html');


module.exports = app;