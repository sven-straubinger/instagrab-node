var React = require('react');
var jQuery = require('jquery');
var Map = require('./map');
var Navigation = require('./navigation');

/* App Component */
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
      markers: []
    };
  },

  componentDidMount: function() {
    // Define parameters
    var parameters = {
      lat: 52.528920,
      lng: 13.411994,
      access_token: App.instagram.accessToken
    }

    // Execute request
    var url = App.instagram.baseUrl + "?" + jQuery.param(parameters);
    this.serverRequest = jQuery.ajax({
      context: this,
      url: url,
      type: 'GET',
      dataType: 'json',
      success: function(result) {
        var markers = [];
        var posts = result.data;

        for(var index in posts) {
          var post = posts[index];
          var id = post.id;
          var caption = post.caption;
          var lat = post.location.latitude;
          var lng = post.location.longitude;
          var marker = {id: id, title: caption, lat: lat, lng: lng}
          markers.push(marker);
        }

        // Update state
        this.setState({
          markers: markers
        });

      },
      error: function(error) {
        var code = error.responseJSON.meta.code;
        var msg = error.responseJSON.meta.error_message;
        alert('Instagram responds with error code ' + code +'. ' + msg + '\n\nURL: ' + url);
      }
    });
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
