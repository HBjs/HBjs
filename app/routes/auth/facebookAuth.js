/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';


var express = require('express'),
    router = express.Router(),
    passport = require('../../controllers/auth/facebookAuth');


/**
 * Routes
 */

router.get('/auth/facebook', passport.authenticate('facebook'));


router.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

module.exports = router;