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
      <ButtonComponent userType="Restaurant Owner" />
      <ButtonComponent userType="Restaurant Customer" />
    </div>
  );
}

export default MainContainer;