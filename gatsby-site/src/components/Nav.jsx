/*
    Created by:                Corey Rogers
    Date submitted (v1):       10/26/2020
    File:                      Nav.js
    File Description:          This component creates a responsive navigation bar the CheaprEats Table Management homepage.
*/

import React from 'react';
import styled from 'styled-components';
import logoForCheaprEats from '../images/logoForCheaprEats.png';
import Navbar from 'react-bootstrap/Navbar';
import '../css/App.css';
import '../css/navBar.css'
function Nav() {

    // Component styling to control the size of the logo photo
    const img = {
        width: '5%',
        height: '5%'
    }

  return (
      <Navbar>
          <Navbar.Brand href="#home">
              <NavText>
                  <img src={ logoForCheaprEats } alt="logo For CheaprEats " style={ img } />
                  CheaprEats
              </NavText>
          </Navbar.Brand>
          <Navbar.Toggle />
      </Navbar>

  );
}

const NavText = styled.div`
  color: red;
  font-size: 4rem;
  text-align: left;
`;


export default Nav;
