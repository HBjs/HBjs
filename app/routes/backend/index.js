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

var indexController = require('../../controllers/backend/index'),
    login = require('../../controllers/backend/login'),
    signIn = require('../../controllers/backend/signIn'),
    postsController = require('../../controllers/backend/index');

/**
 * Routes
 */

router.get('/', indexController);
router.get('/login', login);
router.get('/signin', signIn);
router.get('/stories/:id', postsController);

module.exports = router;