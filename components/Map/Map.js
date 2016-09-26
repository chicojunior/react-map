import React from 'react';
import { render } from 'react-dom';

import './Map.styl';

// const myLatLng = {lat: -3.782197, lng: -38.496493};
// const infoWindow = new google.maps.InfoWindow();
//
// const mapOptions = {
//   center: myLatLng,
//   scrollwheel: true,
//   zoom: 15
// }
//
// const map = new google.maps.Map(document.getElementById('map'), mapOptions);
// const geocoder = new google.maps.Geocoder();
//
// const address = 'greenmile';
//
// geocoder.geocode({'address': address}, function(results, status) {
//   if (status == 'OK') {
//     map.setCenter(results[0].geometry.location);
//     let marker = new google.maps.Marker({
//         map: map,
//         position: results[0].geometry.location
//     });
//   } else {
//     alert('Geocode was not successful for the following reason: ' + status);
//   }
// });

// const marker = new google.maps.Marker({
//   map: map,
//   position: myLatLng,
//   title: 'Hello World!'
// });

// const infoString =
//   '<div id="Test">' +
//     '<div id="test2">' +
//       '<h1>Test</h1>' +
//     '</div>' +
//   '</div>';
//
// infoWindow.setOptions({
//     content: infoString
// });
//
// infoWindow.open(map, marker);

export const Map = React.createClass({

  componentDidMount () {

    const myLatLng = {lat: -3.782197, lng: -38.496493};
    const infoWindow = new google.maps.InfoWindow();

    const mapOptions = {
      center: myLatLng,
      scrollwheel: true,
      zoom: 15
    }

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const geocoder = new google.maps.Geocoder();

    const address = 'Rua Padre Francisco Pita, 1009';

    geocoder.geocode({'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });

  },

  render () {
    return (
      <div className="Map">
        <div id="map"></div>
      </div>

    )
  }

});

export default Map;
