app.factory('EventFactory',function($http) {
	function getEvents(){
		return $http.get('/api/events').then(function(response){
			return response.data;
		});
	}

	function createEvent(event){
		return $http.post('api/events/new', event).then(function(response){
			return response.data;
		})
	}
	return {
		getEvents : getEvents,
		createEvent : createEvent
	}
});