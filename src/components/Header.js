import React, { Component } from 'react';


class Header extends Component {

  render() {
    return (
      <div>
        <p className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#"><div className="cartTitle"> React & Headless Wordpress</div></a>
        </p>
        <a className="header-links" target="_blank" href="https://github.com/webpagepro/"><span className="github"> Github Repo</span></a>
      </div>
    )

  }

}

export default Header