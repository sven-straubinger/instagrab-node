global.jQuery = require('jquery');

var React = require('react');
var Map = require('./map');
var Header = require('./header');
var Indicator = require('./indicator');
var update = require('react-addons-update');


var App = React.createClass({

  statics: {

    instagram: {

      accessToken: '50913539.1a5def0.6b4340c5e992471688d9f1ec5cad48c2', // Please enter a valid access-token here
      searchDistance: 3000, // Instagram default is 1km (distance=1000), max distance is 5km
      searchEndpoint: function() {
        return 'https://api.instagram.com/v1/media/search'
      },
      likeEndpoint: function(id) {
        return 'https://api.instagram.com/v1/media/' + id + '/likes';
      }

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
      markerInfos: [],
      isLoading: false
    };
  },

  searchPosts: function(lat, lng) {
    // Define url
    var parameters = {
      lat: lat,
      lng: lng,
      access_token: App.instagram.accessToken,
      distance: App.instagram.searchDistance
    }
    var url = App.instagram.searchEndpoint() + "?" + jQuery.param(parameters);

    // Execute request
    this.requestUrl(url, 'GET', function(result) {
      var markerInfos = [];
      var posts = result.data;

      for(var index in posts) {
        var post = posts[index];
        var markerInfo = {
          id: post.id,
          lat: post.location.latitude,
          lng: post.location.longitude,
          thumbnail: post.images.thumbnail.url,
          userHasLiked: post.user_has_liked
        }
        markerInfos.push(markerInfo);
      }

      // Update state
      this.setState({markerInfos: markerInfos});

    });
  },

  handleLike: function(markerInfo) {
    if(markerInfo.userHasLiked) {
      this.unlikePost(markerInfo);
    } else {
      this.likePost(markerInfo);
    }
  },

  likePost: function(markerInfo) {
    var url = App.instagram.likeEndpoint(markerInfo.id);
    this.requestUrl(url, 'POST', function(result) {
      this.updateUserHasLiked(markerInfo, true);
    },{
      access_token: App.instagram.accessToken
    });
  },

  unlikePost: function(markerInfo) {
    var parameters = {
      access_token: App.instagram.accessToken
    }
    var url = App.instagram.likeEndpoint(markerInfo.id) + "?" + jQuery.param(parameters);
    this.requestUrl(url, 'POST', function(result) {
      this.updateUserHasLiked(markerInfo, false);
    });
  },

  updateUserHasLiked: function(markerInfo, hasLiked) {
    // Make use of Immutability Helpers
    // https://facebook.github.io/react/docs/update.html
    var markerInfos = this.state.markerInfos;
    var markerIndex = markerInfos.findIndex(function(m) {
      return m.id == markerInfo.id;
    });

    var updatedMarkerInfo  = update(markerInfos[markerIndex], {userHasLiked: {$set: hasLiked}});
    var updatedMarkerInfos = update(markerInfos, {
      $splice: [[markerIndex, 1, updatedMarkerInfo]]
    });
    this.setState({markerInfos: updatedMarkerInfos});
  },

  requestUrl: function(url, type, onSuccess, data) {
    // Start loading indication ...
    this.setState({isLoading: true});

    // ... call ...
    this.serverRequest = jQuery.ajax({
      context: this,
      url: url,
      type: type,
      dataType: 'json',
      success: onSuccess,
      data: data,
      error: function(error) {
        var meta = error.responseJSON.meta;
        alert('Instagram: Error ' + meta.code +'. ' + meta.error_message);
      },
      complete: function() {
        // ... stop loading indication
        this.setState({isLoading: false});
      }
    });
  },

  render: function() {
    return (
      <div>
        <Header />
        <Indicator isLoading={this.state.isLoading}/>
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
