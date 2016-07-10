var React = require('react');

var SearchBar = React.createClass({

 getInitialState: function() {
    return {
      lat: 'lat',
      lng: 'lng'
    };
  },

  handleSubmit: function(event) {
    event.preventDefault();
    this.props.onSearch(this.state.lat);
  },

  handleLatChange: function(event) {
    this.setState({lat: event.target.value});
  },

  handleLngChange: function(event) {
    this.setState({lng: event.target.value});
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.lat}
          onChange={this.handleLatChange}
        />
        <input
          type="text"
          value={this.state.lng}
          onChange={this.handleLngChange}
        />
        <button>Submit</button>
      </form>
    )
  }
});

module.exports = SearchBar;
