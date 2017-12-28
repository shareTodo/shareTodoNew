var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Relation', new Schema({
    userId: String,
    FriendList: Array
}));
