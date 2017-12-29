var mongoose = require('mongoose');
var config = require('../config');
var mongoDB = config.database;
var User = require('../models/user');

mongoose.connect(mongoDB, {
  useMongoClient: true
});

function createUser(userInfo) {
  console.log(userInfo);
  // check if the user has registered
  let newUser = new User({name:'test@hotmail.com', password:'1234567', emailIsPublic: true, joinDate: new Date()});
  newUser.save(function (err) {
    if (err) console.log(err);
    console.log("saved");
    console.log(new Date().toLocaleString());
  });
}

function getUserByEmail(email) {

}

function isValidUser(loginInfo) {
  return true;
}

function deleteUser(userInfo) {

}

module.exports.createUser = createUser;
