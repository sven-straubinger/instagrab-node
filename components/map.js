var React = require('react');

var Map = React.createClass({

  componentDidMount: function() {
    //  Initialize map
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 52.522307, lng: 13.399151},
      zoom: 12,
      draggableCursor:'crosshair'
    });

    // Setup right-click events
    var self = this;
    google.maps.event.addListener(this.map, "rightclick", function(event) {
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();
      self.props.onSearch(lat, lng);
    });

    // Use overlay to show search region
    var radiusCircle = new google.maps.Circle({
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#00FF00',
      fillOpacity: 0.35,
      map: this.map,
      center: this.map.center,
      radius: self.props.searchDistance,
      clickable:false
    });

    google.maps.event.addListener(this.map, 'mousemove', function(e) {
      radiusCircle.setCenter(e.latLng);
    });
  },

  componentDidUpdate: function() {
    // Update markers
    for(var index in this.props.markers) {
        var marker = this.props.markers[index];
        this.addMarker(marker.lat, marker.lng, this.map);
    }
  },

  componentWillUnmount: function() {
    google.maps.event.clearListeners(this.map, 'rightclick');
    google.maps.event.clearListeners(this.map, 'mousemove');
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
