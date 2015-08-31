app.controller('eventCtrl',function($scope, EventFactory){
	EventFactory.getEvents().then(function(events){
		$scope.events=events;
	});

	$scope.list=true;
	$scope.showmap=false;

	$scope.view=function(mode){
		if(mode=='map'){
			$scope.showmap=true;
			$scope.list=false;
		}else if(mode=='list'){
			$scope.list=true;
			$scope.showmap=false;
		}
	}
	
})