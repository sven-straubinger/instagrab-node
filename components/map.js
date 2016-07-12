var React = require('react');

var Map = React.createClass({

  componentDidMount: function() {
    //  Initialize
    this.markers = [];
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 52.522307, lng: 13.399151},
      zoom: 12,
      draggableCursor:'crosshair',
      styles: [{
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }]
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
      strokeColor: 'rgb(235,75,89)',
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
    // Clear
    this.clearMarkers();

    // Update/Create markers from markerInfo
    for(var index in this.props.posts) {
        var markerInfo = this.props.posts[index];
        this.addMarker(markerInfo);
    }
  },

  componentWillUnmount: function() {
    google.maps.event.clearListeners(this.map, 'rightclick');
    google.maps.event.clearListeners(this.map, 'mousemove');
  },

  addMarker: function(markerInfo) {

    // Define image
    var icon = {
      url: markerInfo.thumbnail,
      scaledSize: new google.maps.Size(75, 75)
    }

    var hasLikedLabel = {
      color: "rgb(235,75,89)",
      text: "\u2661",
      fontSize: "60px",
      fontWeight: "bold"
    };

    var latLng = new google.maps.LatLng(markerInfo.lat,markerInfo.lng);
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      icon: icon,
      label: markerInfo.userHasLiked ? hasLikedLabel : null
    });

    var self = this;
    marker.addListener('click', function() {
      self.props.onMarkerClick(markerInfo);
    });

    // Store marker
    this.markers.push(marker);
  },

  clearMarkers: function() {
    for (var i = 0; i < this.markers.length; i++ ) {
      google.maps.event.clearListeners(this.markers[i], 'click');
      this.markers[i].setMap(null);
    }
    this.markers.length = 0;
  },

  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 no-padding">
            <div id="map" />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Map;
