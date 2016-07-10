var React = require('react');

var Map = React.createClass({

  componentDidMount: function() {
    //  Initialize map
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 52.522307, lng: 13.399151},
      zoom: 10
    });

    // Add markers
    for(var index in this.props.markers) {
        var marker = this.props.markers[index];
        this.addMarker(marker.lat, marker.lng, map);
    }
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
