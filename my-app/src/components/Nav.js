import React from 'react';

import '../css/App.css';

function Nav() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navBar">
      <div className="container">
          <a className="navbar-brand" href="index.php#">
              CheaprEats
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item px-1">
                      <a className="nav-link" href="">
                      </a>
                  </li>
                  <li className="nav-item my-auto px-1">
                      <a className="badge badge-pill badge-warning" href="">
                      </a>
                  </li>
                  <li className="nav-item px-1">
                      <a className="nav-link" href="">
                      </a>
                  </li>
              </ul>
          </div>
      </div>
    </nav>

  );
}

export default Nav;
