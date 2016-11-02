/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';



var express = require('express'),
    router = express.Router(),
    passport = require('../../controllers/auth/localAuth-signIn');


/**
 * Routes
 */

router.post('/login',
    passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' })
);

router.post('/signin',
    passport.authenticate('local', { failureFlash: true, failureRedirect: '/signin' })
);

module.exports = router;