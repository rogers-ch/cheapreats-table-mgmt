/*
    Created by:                Level Up team
    Date submitted (v4):       12/08/2020
    File:                      MainContainer.js
    File Description:          This component Contains the text and Button for the Table Management homepage.
*/

import React from 'react';
import '../css/App.css';
import Button from "react-bootstrap/Button";

function MainContainer() {

  return (

    <div className="pt-6 grayBackground">
        <h1 className="pt-3">Table Management Coming Soon!</h1><hr></hr>

        <h4 className="py-4">Comprehensive restaurant management made easy.</h4>

        <p className="pb-3 styleFont">Seat customers, make reservations, track orders, and
          get a bird's-eye view of your dining areas from one simple interface!</p>
        <p className="pb-3 styleFont">Design dining areas and customize your tables with ease. </p>
        <p className="pb-3 styleFont">Track customer interactions
            from end to end, so you can access all your business data in a single location.</p>

        <hr></hr>

        <h5 className="text-center pt-4">Table Management Features:</h5>
        <ul className="list-unstyled styleFont">
            <li className="pb-3 font">Colors make it easy to see which tables are occupied, vacant, and reserved.</li>
            <li className="pb-3 font">See guest names for the occupied chairs at each table.</li>
            <li className="pb-3 font">Get up-to-date occupancy information for your entire restaurant.</li>
        </ul>

        {/* This is the button on the main page that when clicked takes the user to the draggable demo*/}
        <Button className="btn-danger btn-lg border-light rounded NavBarFont buttonWidth mt-2 pb-3" href="#demo">
            Try the Demo!
        </Button>

    </div>
  );
}

export default MainContainer;