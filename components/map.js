var React = require('react');

var Map = React.createClass({

  componentDidMount: function() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    this.addMarker(-34.397, 150.644, map);
  },

  componentDidUpdate: function() {
    console.log("Map component did update.")
  },

  addMarker: function(lat, lng, map) {
    var latLng = new google.maps.LatLng(lat,lng);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      // title: 'Title',
      // icon: { ... some icon or style ... }
    });
  },

  render: function() {
    return (
      <div id="map"></div>
    );
  }

});

module.exports = Map;
