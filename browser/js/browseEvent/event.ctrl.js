app.controller('eventCtrl',function($scope, $rootScope, EventFactory){
	EventFactory.getEvents().then(function(events){
		$scope.events=events;
	});

	$scope.list=true;
	$scope.showmap = false;

	$scope.view=function(mode){
		if(mode=='map'){
			$scope.showmap=true;
			$scope.list=false;
			$rootScope.$broadcast('initMap');
		}else if(mode=='list'){
			$scope.list=true;
			$scope.showmap=false;
		}
	}
	$scope.detail="Show";
	$scope.show=false;
	$scope.changeDetail=function(){
		if($scope.detail="Show"){
			$scope.show=true;
			$scope.detail="Hide";
		}else{
			$scope.show=false;
			$scope.detail="Show";
		}
	}
	
})