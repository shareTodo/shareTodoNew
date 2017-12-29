var userService = require('../services/userService');
var express = require('express');
var router = express.Router();
var common = require('../shared/common');

router.post('/', common.controllerHandler(userService.createUser, (req, res, err) => [req.body]));

router.get('/', function(req, res, err) {

  res.send({"apple":1});
});


router.get('/:email', function(req, res, err) {

  res.send("Good Job!");
});

module.exports = router;
