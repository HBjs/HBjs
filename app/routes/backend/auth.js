/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

'use strict';


var express = require('express'),
    router = express.Router(),
    twitterAuth = require('../../controllers/auth/twitterAuth'),
    googleAuth = require('../../controllers/auth/googleAuth'),
    facebookAuth = require('../../controllers/auth/facebookAuth'),
    localAuth = require('../../controllers/auth/localAuth');

var defaultBehavior = {
    successRedirect: '/',
    failureRedirect: '/login'
};

var googleScope = {
    scope: ['email', 'profile']
};


/**
 * Twitter strategy
 *
 **/
router.get('/auth/twitter', twitterAuth.authenticate('twitter'));
router.get('/auth/twitter/callback', twitterAuth.authenticate('twitter', defaultBehavior));

/**
 * Facebook strategy
 *
 **/
router.get('/auth/facebook', facebookAuth.authenticate('facebook'));
router.get('/auth/facebook/callback', facebookAuth.authenticate('facebook', defaultBehavior));

/**
 * Google strategy
 *
 **/
router.get('/auth/google', googleAuth.authenticate('google', googleScope));
router.get('/auth/google/callback', googleAuth.authenticate('google', defaultBehavior));

/**
 * Local strategy
 *
 **/
router.post('/login', localAuth.authenticate('local', { failureFlash: true, failureRedirect: '/login', successRedirect: '/'}) );
router.post('/signin', localAuth.authenticate('local', { failureFlash: true, failureRedirect: '/signin', successRedirect: '/' }));

/**
 * Logout
 **/
router.get('/logout', function logout(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;