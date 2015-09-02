app.controller('newCtrl',function($scope,EventFactory, $state){
	$scope.location = '';
	$scope.googleName='';
    $scope.doSearch = function(){
        if($scope.location === ''){
            alert('You did not enter a location.');
        } else {
            alert($scope.location);
        }
    };

    $scope.submit=function(event){
    	event.locName=$scope.googleName || event.locName;
    	event.address=$scope.address;
    	event.lat=$scope.location.lat();
    	event.lng=$scope.location.lng();
        event.date=event.date.toISOString();
        event.time=event.time.toTimeString();
        console.log(event);
    	EventFactory.createEvent(event).then(function(response){
    		$state.go('browse');
    	});
    }
});