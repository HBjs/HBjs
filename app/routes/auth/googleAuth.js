/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';


var express = require('express'),
    router = express.Router(),
    passport = require('../../controllers/auth/googleAuth');


/**
 * Routes
 */

var scope = {
    scope: ['email', 'profile']
};

router.get('/auth/google', passport.authenticate('google', scope));


router.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));

module.exports = router;