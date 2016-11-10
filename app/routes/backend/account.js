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

var indexController = require('../../controllers/account/index');

/*var indexController = require('../../controllers/backend/index'),
    login = require('../../controllers/backend/login'),
    signIn = require('../../controllers/backend/signIn'),
    postsController = require('../../controllers/backend/index');*/

/**
 * Routes
 */

router.get('/account', indexController);
router.get('/account/stories/create', indexController);

module.exports = router;