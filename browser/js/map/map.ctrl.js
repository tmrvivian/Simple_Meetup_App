//Data

app.controller('MapCtrl', function ($scope, EventFactory) {

    $scope.$on('initMap', initMap);

    var mapOptions = {
        zoom: 7,
        center: new google.maps.LatLng(41.6032207, -73.08774900000003),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    function initMap () {
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        EventFactory.getEvents().then(function(events){
            console.log(events);
           for (var i = 0; i < events.length; i++){
                createMarker(events[i]);
            }
        });
    }


    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        console.log(info);
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.lng),
            title: info.name
        });

        // /console.log(marker);
        marker.content = '<div class="infoWindowContent">' + info.detail + '</div>';
    

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2> <p>'+info.date.slice(0,10)+'</p>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        $scope.markers.setMap($scope.map);
        google.maps.event.trigger(selectedMarker, 'click');
    }          
});
