'use strict';

const express = require('express');
const router = express.Router();
const config = require('../../config.js');

/**
 * GET /login
 * Display login page
 */
router.get('/login', function (req, res) {
    res.send('You are on the login page');
});

/**
 * GET /logout
 * Display logout page
 */
router.get('/logout', function (req, res) {
    res.send('You are on the logout page');
});

/**
 * GET /
 * Get authentication status and environment information
 */
router.get('/', (req, res) => {
    console.log("Authenticated successfully");
    const envInfo = [];
    envInfo.push({ "Env": config.env })
    res.status(200).json(envInfo);
});

module.exports = router;