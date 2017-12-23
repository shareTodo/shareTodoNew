const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime);

app.get('/', (req, res) => {
  var responseText = "Request sent at" + req.requestTime;
  res.send(responseText);
});
// set up the port
const port = 8000;

app.listen(port, () => {
  console.log('We are live on ' + port);
});
