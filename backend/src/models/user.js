var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    email: String,
    name: String,
    password: String,
    gender: String,
    profilePic: String,
    emailIsPublic: Boolean,
    joinDate: Date
}));
