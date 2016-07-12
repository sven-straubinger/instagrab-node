var React = require('react');

var Indicator = React.createClass({
    render: function() {
        var className = this.props.isLoading ? 'loading' : '';
        return (
          <div id="indicator" className={className}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 no-padding text-center">
                  <div className="text" Loading> Loading ... </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
});

module.exports = Indicator;
