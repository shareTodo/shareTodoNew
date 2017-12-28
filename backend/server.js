const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var user = require('./src/routes/user');
var friend = require('./src/routes/friend');

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
