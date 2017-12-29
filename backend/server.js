const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var user = require('./src/routes/user');
var friend = require('./src/routes/friend');

function test(req, res, next){
  console.log("passing");
  console.log(req.url);
  next();
}
app.use(test);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/user', user);
app.use('/friend', friend);

app.get('/', (req, res) => {
  res.send('Welcome to my app');
});
// set up the port
const port = 8000;

app.listen(port, () => {
  console.log('We are live on ' + port);
});
