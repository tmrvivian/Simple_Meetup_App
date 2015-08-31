app.factory('EventFactory',function($http) {
	function getEvents(){
		return $http.get('/api/events').then(function(response){
			return response.data;
		});
	}
	return {
		getEvents: getEvents
	}
});