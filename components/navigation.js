var React = require('react');

var Navigation = React.createClass({

  render: function() {
    return (
      <div id="navigation">
        <h1>Instagrab</h1>
        <span>Navigation</span>
        {/* <a href="/" title="Link to homepage">Home</a> */}
      </div>
    )
  }

});

module.exports = Navigation;
