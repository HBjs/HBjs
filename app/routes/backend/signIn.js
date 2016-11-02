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

var signInController = require('../../controllers/backend/sighIn');


/**
 * Routes
 */

router.post('/signin', signInController);

module.exports = router;