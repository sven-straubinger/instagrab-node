var React = require('react');
var Map = require('./map');
var Navigation = require('./navigation');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Instagrab</h1>
        <Navigation />
        <Map />
      </div>
    );
  }
});

module.exports = App;
