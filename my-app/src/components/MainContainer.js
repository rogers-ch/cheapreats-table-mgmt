/*
    Created by:                Level Up team
    Date submitted (v1):       10/26/2020
    File:                      MainContainer.js
    File Description:          This component Contains the text and ButtonModals for the Table Management homepage.
*/

import React from 'react';
import '../css/App.css';
import CustomerInfo from "./CustomerInfo";

function MainContainer() {

  return (

    <div className="pt-6">
        <h1 className="pt-3">Table Management Coming Soon!</h1><hr></hr>

        <p className="pt-2 pb-3 styleFont">Comprehensive restaurant management made easy.</p>
        <p className="pb-3 styleFont">Seat customers, make reservations, track orders,and
          get a birds-eye view of your dining areas from one simple interface!</p>
        <p className="pb-3 styleFont">To see a demo  of a restaurant design, click to the left.</p>

        <CustomerInfo />
    </div>
  );
}

export default MainContainer;