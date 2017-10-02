'use strict';

const express = require('express');
const router = express.Router();
let config = require('../../config.js');

// We are going to do the same thing for the remaining routes.
router.get('/login', function (req, res) {
    res.send('You are on the login page');
});

router.get('/logout', function (req, res) {
    res.send('You are on the logout page');
});

router.get('/', (req, res) => {
    console.log("I'm authenticate");
    let test = [];
    test.push({ "Env": config.env })
    res.status(200).json(test);
});

module.exports = router;