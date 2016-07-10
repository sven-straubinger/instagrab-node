var React = require('react');
var SearchBar = require('./searchBar')

var Navigation = React.createClass({
  render: function() {
    return (
      <div>
        <span>Navigation</span>
        {/* <a href="/" title="Link to homepage">Home</a> */}
        <SearchBar />
      </div>
    )
  }
});

module.exports = Navigation;
