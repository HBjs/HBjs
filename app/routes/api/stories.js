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

var Story = require('../../controllers/api/stories');

/**
 * Routes
 */

router.get('/api/stories/:id', Story.getStoryById);
router.post('/api/stories/create', Story.createStory);
/*router.post('/api/stories/update', stories);
router.post('/api/stories/delete', stories);*/

module.exports = router;