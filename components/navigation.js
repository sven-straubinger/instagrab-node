var React = require('react');

var Navigation = React.createClass({

  render: function() {
    return (
      <div id="navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>Instagrab</h1>
              <span>Navigation</span>
              {/* <a href="/" title="Link to homepage">Home</a> */}
            </div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Navigation;
