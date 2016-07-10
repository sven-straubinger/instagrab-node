var React = require('react');

var Map = React.createClass({

  componentDidMount: function() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  },

  componentDidUpdate: function() {
    console.log("Map component did update.")
  },

  render: function() {
    return (
      <div id="map"></div>
    );
  }

});

module.exports = Map;
