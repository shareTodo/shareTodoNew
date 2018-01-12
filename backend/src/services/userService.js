const mongoose = require('mongoose');
const config = require('../config');
const mongoDB = config.database;
const User = require('../models/user');
const bcrypt = require('bcrypt');

mongoose.connect(mongoDB, {
  useMongoClient: true
});

function getUserByEmail(email) {
  User.findOne({'email': email}).exec()
      .then(res => {console.log(res);return res;} );
}

function createUser(userInfo) {
  console.log(userInfo);
  // check if the user has registered
  console.log(getUserByEmail(userInfo.email));
  // encrypt the password
  let hashedPw = bcrypt.hashSync(userInfo.password, 5);
  let newUser = new User({email: userInfo.email, name:userInfo.username,
                          password: hashedPw, emailIsPublic: userInfo.isPublic,
                          gender: userInfo.gender, joinDate: new Date()});
  newUser.save(function (err) {
    if (err) console.log(err);
    else {
      console.log("saved");
      console.log(new Date().toLocaleString());
    }

  });
}

function isValidUser(loginInfo) {
  return true;
}

function deleteUser(userInfo) {

}

module.exports.createUser = createUser;
