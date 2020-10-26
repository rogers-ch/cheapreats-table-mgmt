/*
    Created by:                Level Up team
    Date submitted (v1):       10/26/2020
    File:                      MainContainer.js
    File Description:          This component Contains the text and ButtonModals for the Table Management homepage.
*/

import React from 'react';
import '../css/App.css';
import ButtonModal from "./ButtonModal"
import DinningRoomImage from "../images/DinningRoomImage.png"
import SquareTableImage from '../images/SquareTableImage.png'

function MainContainer() {

  return (
    <div className="pt-6">
      <h1>Table Management Coming Soon!</h1>
      <p>-Comprehensive restaurant management made easy-</p>
      <p>Seat customers, make reservations, track orders,</p>
      <p>and get a birds-eye view of your dining areas from one simple interface!</p>
      <p>Click below for more information!</p>
        <div className="d-flex justify-content-center">

            {/* ButtonModal components for info buttons */}
            <div className="pr-1">
                <ButtonModal userType='Restaurant Owner' text="Owner.txt" image={DinningRoomImage} />
            </div>
            <div className="pl-1">
                <ButtonModal userType='Restaurant Customer' text="Customer.txt" image={SquareTableImage} />
            </div>
        </div>

    </div>
  );
}

export default MainContainer;