var mongoose = require('mongoose');
var config = require('.../config');
var mongoDB = config.database;
import User from '../models/user';

mongoose.connect(mongoDB, {
  useMongoClient: true
});

function createUser() {
  var alice = new User({email:'test@hotmail.com', password:'1234567', emailIsPublic: true, joinDate: Date.now()});
  alice.save(function (err) {
    if (err) console.log(err);
    console.log("saved");
  });
}
