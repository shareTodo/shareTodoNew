var express = require('express');
var router = express.Router();

router.get('/', function(req, res, err) {
  res.send("Add me ad your friend!");
});

module.exports = router;
