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

var loginController = require('../../controllers/backend/login');


/**
 * Routes
 */

router.get('/login', loginController);

module.exports = router;