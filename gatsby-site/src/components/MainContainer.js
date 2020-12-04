/*
    Created by:                Level Up team
    Date submitted (v1):       10/26/2020
    File:                      MainContainer.js
    File Description:          This component Contains the text and ButtonModals for the Table Management homepage.
*/

import React from 'react';
import './../css/App.css';
import CustomerInfo from "./CustomerInfo";
import styled from 'styled-components';

function MainContainer() {

  return (

    <Pt6>
        <Pt3WithH3>Table Management Coming Soon!</h1><hr></hr>

        <Pt2Pb3 className="styleFont">Comprehensive restaurant management made easy.</Pt2Pb3>
        <Pb3 className="styleFont">Seat customers, make reservations, track orders,and
          get a birds-eye view of your dining areas from one simple interface!</Pb3>
        <Pb3 className="styleFont">To see a demo  of a restaurant design, click to the left.</Pb3>

        <CustomerInfo />
    </div>
  );
}

const Pb3 = styled.div`
    padding-bottom: 1rem;
`;

const Pt2Pb3 = styled.div`
    padding-bottom: 1rem;
    padding-top: 0.5rem;
`;

const Pt3WithH3 = styled.div`
    padding-top: 1rem;
    font-size: 2.5rem;
    font-family: 'Lato', sans-serif;
`;

const Pt6 = styled.div`
    padding-top: 3.5rem;
    padding-bottom: 1rem;
    background-color: rgb(245, 245, 245);
`;

export default MainContainer;