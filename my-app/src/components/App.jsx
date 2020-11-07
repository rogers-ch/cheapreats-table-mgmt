/*
    Created by:                Level Up team
    Date submitted (v1):       10/26/2020
    File:                      App.jsx
    File Description:          This component is main entry point for the CheaprEats Table Management homepage.
*/
import React from 'react';
import '../css/App.css';

import MainContainer from './MainContainer';
import Nav from './Nav';
import Footer from './Footer';

import SideNav from "./sideNav";

function App () {

  return (
    <div className="App">

        <div className="row">
            <div className="colForSideBar" >
                <SideNav />
            </div>
            <div className="colForRightSide" >
                <Nav />
                <MainContainer />
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
