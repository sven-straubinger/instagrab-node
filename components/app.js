var React = require('react');
var jQuery = require('jquery');
var Map = require('./map');
var Navigation = require('./navigation');

// Data Source
var markers = [
  {id: 1, title: "Title-1", lat: -34.387, lng: 150.634},
  {id: 2, title: "Title-2", lat: -34.397, lng: 150.654}
];

// App Component
var App = React.createClass({

  statics: {
    baseUrl: 'https://api.github.com/users/octocat/gists'
  },

  render: function() {
    return (
      <div>
        <h1>Instagrab</h1>
        <Navigation />
        <Map markers={markers} />
      </div>
    );
  }
});

module.exports = App;
