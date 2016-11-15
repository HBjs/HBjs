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

var Tag = require('../../controllers/api/tags');

/**
 * Routes
 */

router.get('/api/tags/:id', Tag.getTagById);
router.post('/api/tags/create', Tag.createTag);
/*router.post('/api/stories/update', stories);
 router.post('/api/stories/delete', stories);*/

module.exports = router;