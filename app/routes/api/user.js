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

var User = require('../../controllers/api/users');

/**
 * Routes
 */

router.get('/api/user/', User.getUserProfile);
router.get('/api/users/:id', User.getUserById);
/*router.post('/api/user/create', Tag.createTag);*/
/*router.post('/api/stories/update', stories);
 router.post('/api/stories/delete', stories);*/

module.exports = router;