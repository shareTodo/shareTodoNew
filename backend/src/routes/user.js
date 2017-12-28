var express = require('express');
var router = express.Router();

router.post('/', function(req, res, err) {
  res.send("Create new user!");
});

router.get('/:email', function(req, res, err) {
  res.send("Good Job!");
});

module.exports = router;
