var React = require('react');

var Navigation = React.createClass({

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
                <li className="active">
                  <a href="#">Link <span className="sr-only">(current)</span></a>
                </li>
                <li>
                  <a className="github-link" href="https://github.com/sven-straubinger/instagrab-node" title="View on GitHub" target="_blank">
                    <img src="public/images/git.png" height="34" alt="Octocat Logo" title="Octocat" />
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

module.exports = Navigation;
