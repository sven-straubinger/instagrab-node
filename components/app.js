global.jQuery = require('jquery');

var React = require('react');
var Map = require('./map');
var Header = require('./header');

/* App Component */
var App = React.createClass({

  statics: {

    instagram: {

      searchEndpoint: 'https://api.instagram.com/v1/media/search',
      likeEndpoint: function(id) {
        return 'https://api.instagram.com/v1/media/' + id + '/likes';
      },
      searchDistance: 2500, // Default is 1km (distance=1000), max distance is 5km
      accessToken: '50913539.1a5def0.6b4340c5e992471688d9f1ec5cad48c2' // Please enter a valid access-token here

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
      markerInfos: []
    };
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  searchPosts: function(lat, lng) {
    // Define parameters
    var parameters = {
      lat: lat,
      lng: lng,
      access_token: App.instagram.accessToken,
      distance: App.instagram.searchDistance
    }

    // Execute request
    var url = App.instagram.searchEndpoint + "?" + jQuery.param(parameters);
    this.serverRequest = jQuery.ajax({
      context: this,
      url: url,
      type: 'GET',
      dataType: 'json',
      success: function(result) {
        var markerInfos = [];
        var posts = result.data;

        for(var index in posts) {
          var post = posts[index];
          var markerInfo = {
            id: post.id,
            title: post.caption,
            lat: post.location.latitude,
            lng: post.location.longitude,
            thumbnail: post.images.thumbnail.url,
            userHasLiked: post.user_has_liked
          }
          markerInfos.push(markerInfo);
        }

        // Update state
        this.setState({
          markerInfos: markerInfos
        });

      },
      error: function(error) {
        var code = error.responseJSON.meta.code;
        var msg = error.responseJSON.meta.error_message;
        alert('Instagram responds with error code ' + code +'. ' + msg + '\n\nURL: ' + url);
      }
    });
  },

  handleLike: function(post) {
    if(post.userHasLiked) {
      this.unlikePost(post);
    } else {
      this.likePost(post);
    }
  },

  likePost: function(post) {
    var url = App.instagram.likeEndpoint(post.id);
    this.serverRequest = jQuery.ajax({
      context: this,
      url: url,
      type: 'POST',
      dataType: 'json',
      data: {
        access_token: App.instagram.accessToken
      },
      success: function(result) {
        alert('Liked Post');
        // TODO Update State
      },
      error: function(error) {
        var code = error.responseJSON.meta.code;
        var msg = error.responseJSON.meta.error_message;
        alert('Instagram responds with error code ' + code +'. ' + msg + '\n\nURL: ' + url);
      }
    });

  },

  unlikePost: function(post) {
    var parameters = {
      access_token: App.instagram.accessToken
    }
    var url = App.instagram.likeEndpoint(post.id) + "?" + jQuery.param(parameters);
    this.serverRequest = jQuery.ajax({
      context: this,
      url: url,
      type: 'DELETE',
      dataType: 'json',
      data: {
        access_token: App.instagram.accessToken
      },
      success: function(result) {
        alert('Unliked Post');
        // TODO Update State
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
        <Header />
        <Map
          markerInfos={this.state.markerInfos}
          onSearch={this.searchPosts}
          onMarkerClick={this.handleLike}
          searchDistance={App.instagram.searchDistance}
        />
      </div>
    );
  }
});

module.exports = App;
