app.config(function($stateProvider){
	$stateProvider.state('browse',{
		url:'/events',
		templateUrl:'js/browseevent/browse.html',
		controller:'eventCtrl'
	});
});