var React = require('react');
var jQuery = require('jquery');
var Map = require('./map');
var Navigation = require('./navigation');

/* App Component */
var App = React.createClass({

  statics: {

    instagram: {

      baseUrl: 'https://api.instagram.com/v1/media/search',
      searchDistance: 2500, // Default is 1km (distance=1000), max distance is 5km
      accessToken: '' // Please enter a valid access-token here

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
       * But, for the sake of simplicity we assume the token does not expire.
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

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  searchMedia: function(lat, lng) {
    // Define parameters
    var parameters = {
      lat: lat,
      lng: lng,
      access_token: App.instagram.accessToken,
      distance: App.instagram.searchDistance
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
          var marker = {
            id: post.id,
            title: post.caption,
            lat: post.location.latitude,
            lng: post.location.longitude,
            thumbnail: post.images.thumbnail.url
          }
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

  render: function() {
    return (
      <div>
        <h1>Instagrab</h1>
        <Navigation />
        <Map
          markers={this.state.markers}
          onSearch={this.searchMedia}
          searchDistance={App.instagram.searchDistance}
        />
      </div>
    );
  }
});

module.exports = App;
