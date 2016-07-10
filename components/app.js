var React = require('react');
var jQuery = require('jquery');
var Map = require('./map');
var Navigation = require('./navigation');

// App Component
var App = React.createClass({

  statics: {
    baseUrl: 'https://api.github.com/users/octocat/gists'
  },

  getInitialState: function() {
    return {
      markers: [
        {id: 1, title: "Title-1", lat: 52.522307, lng: 13.398251},
        {id: 2, title: "Title-1", lat: 52.523407, lng: 13.399151},
      ]
    };
  },

  componentDidMount: function() {
    this.serverRequest = jQuery.get(App.baseUrl, function (result) {
      var lastGist = result[0];
      this.setState({
        // markers: // Replace with response
        // TODO: Check 200 (ok) status code
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        <h1>Instagrab</h1>
        <Navigation />
        <Map markers={this.state.markers} />
      </div>
    );
  }
});

module.exports = App;
