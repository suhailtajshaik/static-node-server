'use strict';

const express = require('express');
const router = express.Router();
let config = require('../../config.js');

router.get('/', function(req, res){
 console.log('i am Logedin');
  let test =[];
  test.push({"mock":config.mock})
  res.status(200).json(test);
});

module.exports = router;