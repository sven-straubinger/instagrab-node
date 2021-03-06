var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <header>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img src="public/images/instagrab-logo.png" width="90" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="https://github.com/sven-straubinger/instagrab-node" title="View on GitHub" target="_blank">
                    View on GitHub
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </header>
    )
  }

});

module.exports = Header;
