var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name: String,
    detail: String,
    loc: String,
    date: Date,
    time:[Number,Number],//hour,time
    privacy: String,
    img:String
});



mongoose.model('Event', eventSchema);