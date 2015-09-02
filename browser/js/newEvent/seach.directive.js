app.directive('googleSearch', function(){
	return{
		restrict:'E',
        replace:true,
        //transclude:true,
        scope: {location:'=',
    			googleName:'=',
    			address:'='},
        template: '<input name="google_places_ac" type="text" class="input-block-level"/>',
        link: function($scope, elm, attrs){
            var autocomplete = new google.maps.places.Autocomplete(elm[0], {});
            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                $scope.$evalAsync(function () {
                	$scope.googleName=place.name;
                	$scope.address=place.formatted_address;
                	$scope.location = place.geometry.location;
                });
            });
		}
	}
})