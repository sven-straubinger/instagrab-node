var React = require('react');
var Map = require('./map');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Instagrab</h1>
        <Map />
      </div>
    );
  }
});

module.exports = App;
