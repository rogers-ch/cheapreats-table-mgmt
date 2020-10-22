import React from 'react';
import '../css/App.css';
import { ButtonComponent } from './ButtonComponent';


function MainContainer() {

  return (
    <div className="pt-6">
      <h1>Table Management Coming Soon!</h1>
      <p>-Comprehensive restaurant management made easy-</p>
      <p>Seat customers, make reservations, track orders,</p>
      <p>and get a birds-eye view of your dining areas from one simple interface!</p>
      <p>Click below for more information!</p>
        <div className="d-flex justify-content-center">
            <div className="pr-1">
                <ButtonComponent userType="Restaurant Owner" />
            </div>
            <div className="pl-1">
                <ButtonComponent userType="Restaurant Customer" />
            </div>
        </div>
    </div>
  );
}

export default MainContainer;