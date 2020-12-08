/*
    Created by:                Level Up team
    Date submitted (v4):       12/08/2020
    File:                      App.jsx
    File Description:          This component is main entry point for the CheaprEats Table Management homepage.
*/

import React from 'react';
import '../css/App.css';
import MainContainer from './MainContainer';
import Nav from './Nav';
import Footer from './Footer';
import DraggableDemoFront from "./DraggableDemoFront";

function App () {

  return (
    <div className="App">

        <div className="container">
            <Nav />
            <MainContainer />
        </div>
        <div className="spacer" id="demo"></div>

        <DraggableDemoFront />

        <Footer />
    </div>
  );
}

export default App;
