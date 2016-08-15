/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';

var express = require('express'),
    router = express.Router();

/**
 * Initialization controllers
 */

var indexController = require('../../controllers/backend/index');


/**
 * Routes
 */

router.get('/posts/:id', indexController);

module.exports = router;