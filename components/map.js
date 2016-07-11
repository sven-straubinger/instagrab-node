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
      strokeOpacity: 0.45,
      strokeWeight: 1,
      fillColor: '#FFFFFF',
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
        this.addMarker(marker);
    }
  },

  componentWillUnmount: function() {
    google.maps.event.clearListeners(this.map, 'rightclick');
    google.maps.event.clearListeners(this.map, 'mousemove');
  },

  addMarker: function(post) {
    // Define image
    var icon = {
      url: post.thumbnail,
      scaledSize: new google.maps.Size(75, 75)
    }

    var latLng = new google.maps.LatLng(post.lat,post.lng);
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      icon: icon
    });

    var self = this;
    marker.addListener('click', function() {
      self.props.onMarkerClick(post);
    });

  },

  render: function() {
    return (
      <div id="map"></div>
    );
  }

});

module.exports = Map;
