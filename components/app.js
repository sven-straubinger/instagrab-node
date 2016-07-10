var React = require('react');
var jQuery = require('jquery');
var Map = require('./map');
var Navigation = require('./navigation');

// App Component
var App = React.createClass({

  statics: {

    instagram: {

      baseUrl: 'https://api.instagram.com/v1/media/search',
      accessToken: '' // <-- Please enter a valid access-token here

      /*
       * NOTE:
       * Even though our access tokens do not specify an expiration time,
       * the app should handle the case that either the user revokes access,
       * or Instagram expires the token after some period of time.
       *
       * If the token is no longer valid, API responses will contain an “error_type=OAuthAccessTokenError”.
       * In this case we will need to re-authenticate the user to obtain a new valid token.
       * In other words: we should not assume our access_token is valid forever.
       *
       * For the sake of simplicity we assume the token does not expire.
       *
       * See: https://www.instagram.com/developer/authentication/
       */

    }
  },

  getInitialState: function() {
    return {
      markers: [
        // {id: 1, title: "Title-1", lat: 52.522307, lng: 13.398251},
        // {id: 2, title: "Title-1", lat: 52.523407, lng: 13.399151},
      ]
    };
  },

  componentDidMount: function() {
    var parameters = {
      lat: 52.522307,
      lng: 13.398251,
      access_token: App.instagram.accessToken
    }

    var url = App.instagram.baseUrl + "?" + jQuery.param(parameters);

    this.serverRequest = jQuery.get(url, function (result) {
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
