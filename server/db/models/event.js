var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
	name:String,
    locName: String,
    lat:Number,
    lng:Number,
    detail: String,
    address: String,
    date: String,
    time:String,
    privacy: {type: String, default:'Open to Public'},
    img:String
});


mongoose.model('Event', eventSchema);