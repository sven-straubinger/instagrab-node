var React = require('react');

var Indicator = React.createClass({
    render: function() {
        return (
          <div id="indicator">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 no-padding text-center">
                  Loading ...
                </div>
              </div>
            </div>
          </div>
        );
    }
});

module.exports = Indicator;
