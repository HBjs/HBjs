/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';


var express = require('express'),
    router = express.Router(),
    passport = require('../../controllers/auth/twitterAuth');


/**
 * Routes
 */

router.get('/auth/twitter', passport.authenticate('twitter'));


router.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' }));

module.exports = router;