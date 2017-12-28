var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Task', new Schema({
    userId: String,
    taskId: String,
    content: String,
    createTime: Date,
    scheduledTime: Date,
    finishedTime: Date,
    isFinished: Boolean,
    isPublic: Boolean
}));
