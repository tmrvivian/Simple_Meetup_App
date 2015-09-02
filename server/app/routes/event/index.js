'use strict';
var router=require('express').Router();
module.exports = router;
var mongoose=require('mongoose');
var Events=mongoose.model('Event');
router.get('/',function(req, res, next){
	Events.find({}).then(function(events){
		res.json(events);
	})
})

router.post('/new',function(req,res,next){
	Events.create(req.body).then(function(event){
		res.json(event);
	});
});