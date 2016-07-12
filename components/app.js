global.jQuery = require('jquery');

var React = require('react');
var Map = require('./map');
var Header = require('./header');
var Indicator = require('./indicator');
var update = require('react-addons-update');


var App = React.createClass({

  statics: {
    instagram: {

      /*
       * NOTE:
       * Even though Instagram's access tokens do not specify an expiration time,
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

      accessToken: '50913539.1a5def0.6b4340c5e992471688d9f1ec5cad48c2',
      searchDistance: 3000, // Instagram default is 1km (distance=1000), max distance is 5km
      searchEndpoint: function() {
        return 'https://api.instagram.com/v1/media/search'
      },
      likeEndpoint: function(id) {
        return 'https://api.instagram.com/v1/media/' + id + '/likes';
      }
    }
  },

  getInitialState: function() {
    return {
      posts: [],
      isLoading: false
    };
  },

  searchPosts: function(lat, lng) {

    var url = App.instagram.searchEndpoint() + "?" + jQuery.param({
      lat: lat,
      lng: lng,
      access_token: App.instagram.accessToken,
      distance: App.instagram.searchDistance
    });

    this.requestUrl(url, 'GET', function(result) {
      var posts = [];
      var data = result.data;

      for(var index in data) {
        var json = data[index];
        var post = {
          id: json.id,
          lat: json.location.latitude,
          lng: json.location.longitude,
          thumbnail: json.images.thumbnail.url,
          userHasLiked: json.user_has_liked
        }
        posts.push(post);
      }

      this.setState({posts: posts});

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
    this.requestUrl(url, 'POST', function(result) {
      this.updateUserHasLiked(post, true);
    },{
      access_token: App.instagram.accessToken
    });
  },

  unlikePost: function(post) {
    var parameters = {
      access_token: App.instagram.accessToken
    }
    var url = App.instagram.likeEndpoint(post.id) + "?" + jQuery.param(parameters);
    this.requestUrl(url, 'DELETE', function(result) {
      this.updateUserHasLiked(post, false);
    });
  },

  updateUserHasLiked: function(post, hasLiked) {
    // Make use of Immutability Helpers
    // https://facebook.github.io/react/docs/update.html
    var posts = this.state.posts;
    var index = posts.findIndex(function(p) {
      return p.id == post.id;
    });

    var updatedPost  = update(posts[index], {userHasLiked: {$set: hasLiked}});
    var updatedPosts = update(posts, {
      $splice: [[index, 1, updatedPost]]
    });
    this.setState({posts: updatedPosts});
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
        if(typeof error.responseJSON === "undefined") {
          alert('Hey there, seems like something went wrong. Please note, that the app works best with Safari, due the "Access-Control-Allow-Origin" policy of other browsers.');
        } else {
          var code = error.responseJSON.meta.code;
          var msg  = error.responseJSON.meta.error_message;
          alert('Instagram responds with error ' + code +'. ' + msg);
        }
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
          posts={this.state.posts}
          onSearch={this.searchPosts}
          onMarkerClick={this.handleLike}
          searchDistance={App.instagram.searchDistance}
        />
      </div>
    );
  }
});

module.exports = App;
