var React = require('react');
var SearchBar = require('./searchBar')

var Navigation = React.createClass({

  searchForLatLng: function(search) {
    alert(search);
  },

  render: function() {
    return (
      <div>
        <span>Navigation</span>
        {/* <a href="/" title="Link to homepage">Home</a> */}
        <SearchBar onSearch={this.searchForLatLng} />
      </div>
    )
  }

});

module.exports = Navigation;
