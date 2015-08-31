app.controller('locSearch',function($scope){
	$scope.location = '';
    $scope.doSearch = function(){
        if($scope.location === ''){
            alert('You did not enter a location.');
        } else {
            alert($scope.location);
        }
    };
});