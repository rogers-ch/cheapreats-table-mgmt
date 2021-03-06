/*
    Created by:                Level Up team
    Date submitted (v1):       10/26/2020
    File:                      Nav.js
    File Description:          This component creates a responsive navigation bar the CheaprEats Table Management homepage.
*/

import React from 'react';
import logoForCheaprEats from '../images/logoForCheaprEats.png';
import '../css/App.css';

function Nav() {

    // Component styling to control the size of the logo photo
    const img = {
        width: '20px',
        height: '20px'
    }

    // Component styling to control the font size in the navigation
    const navFont = {
        'font-size': '1.2rem'
    }

  return (

    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navBar">
      <div className="container">

          {/* Logo */}
          <a className="navbar-brand text-danger" href="https://www.cheapreats.com/">
              <img src={ logoForCheaprEats } alt="logo For CheaprEats " style={ img }></img>
             CheaprEats
          </a>

        {/* Button for collapsed nav */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="">
              <ul className="navbar-nav ml-auto">

                  {/* Placeholders for eventual nav tabs */}
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
