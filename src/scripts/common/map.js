
const map= (function(){

    return {

        init: function() {
        let map;
        const coords = {lat: 54.623909, lng: 39.788658};
        const markerImg = '/assets/images/img/marker.png';

        map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 54.619245, lng: 39.757416},
                zoom: 14,
                disableDefaultUI: true,
                scrollwheel: false,
                styles: [
                    {
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'color': '#f5f5f5',
                        },
                      ],
                    },
                    {
                      'elementType': 'labels.icon',
                      'stylers': [
                        {
                          'visibility': 'off',
                        },
                      ],
                    },
                    {
                      'elementType': 'labels.text.fill',
                      'stylers': [
                        {
                          'color': '#616161',
                        },
                      ],
                    },
                    {
                      'elementType': 'labels.text.stroke',
                      'stylers': [
                        {
                          'color': '#f5f5f5',
                        },
                      ],
                    },
                    {
                      'featureType': 'administrative.land_parcel',
                      'elementType': 'labels.text.fill',
                      'stylers': [
                        {
                          'color': '#bdbdbd',
                        },
                      ],
                    },
                    {
                      'featureType': 'poi',
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'color': '#eeeeee',
                        },
                      ],
                    },
                    {
                      'featureType': 'poi',
                      'elementType': 'labels.text',
                      'stylers': [
                        {
                          'visibility': 'off',
                        },
                      ],
                    },
                    {
                      'featureType': 'poi',
                      'elementType': 'labels.text.fill',
                      'stylers': [
                        {
                          'color': '#757575',
                        },
                      ],
                    },
                    {
                      'featureType': 'poi.business',
                      'stylers': [
                        {
                          'visibility': 'off',
                        },
                      ],
                    },
                    {
                      'featureType': 'poi.park',
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'color': '#e5e5e5',
                        },
                      ],
                    },
                    {
                      'featureType': 'poi.park',
                      'elementType': 'labels.text.fill',
                      'stylers': [
                        {
                          'color': '#9e9e9e',
                        },
                      ],
                    },
                    {
                      'featureType': 'road',
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'color': '#ffffff',
                        },
                      ],
                    },
                    {
                      'featureType': 'road',
                      'elementType': 'labels.icon',
                      'stylers': [
                        {
                          'visibility': 'off',
                        },
                      ],
                    },
                    {
                      'featureType': 'road.arterial',
                      'elementType': 'labels.text.fill',
                      'stylers': [
                        {
                          'color': '#757575',
                        },
                      ],
                    },
                    {
                      'featureType': 'road.highway',
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'color': '#dadada',
                        },
                      ],
                    },
                    {
                      'featureType': 'road.highway',
                      'elementType': 'labels.text.fill',
                      'stylers': [
                        {
                          'color': '#616161',
                        },
                      ],
                    },
                    {
                      'featureType': 'road.local',
                      'elementType': 'labels.text.fill',
                      'stylers': [
                        {
                          'color': '#9e9e9e',
                        },
                      ],
                    },
                    {
                      'featureType': 'transit',
                      'stylers': [
                        {
                          'visibility': 'off',
                        },
                      ],
                    },
                    {
                      'featureType': 'transit.line',
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'color': '#e5e5e5',
                        },
                      ],
                    },
                    {
                      'featureType': 'transit.station',
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'color': '#eeeeee',
                        },
                      ],
                    },
                    {
                      'featureType': 'water',
                      'stylers': [
                        {
                          'color': '#86a77a',
                        },
                      ],
                    },
                    {
                      'featureType': 'water',
                      'elementType': 'geometry',
                      'stylers': [
                        {
                          'color': '#c9c9c9',
                        },
                      ],
                    },
                    {
                      'featureType': 'water',
                      'elementType': 'geometry.fill',
                      'stylers': [
                        {
                          'color': '#00bfa5',
                        },
                      ],
                    },
                    {
                      'featureType': 'water',
                      'elementType': 'labels.text.fill',
                      'stylers': [
                        {
                          'color': '#9e9e9e',
                        },
                      ],
                    },
                  ]
              });

        marker = new google.maps.Marker({
                position: coords,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: markerImg
            });

    
    }
     

}

}());






module.exports = map;