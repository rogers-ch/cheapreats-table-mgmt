import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { ButtonComponent } from './ButtonComponent';

function App() {

  return (
    <div className="App">
      <h1>Table Management Coming Soon!</h1>
      <p>-Comprehensive restaurant management made easy-</p>
      <p>Seat customers, make reservations, track orders,</p>
      <p>and get a birds-eye view of your dining areas from one simple interface!</p>
      <p>Click below for more information!</p>
      <ButtonComponent />
      <ButtonComponent />
    </div>
  );
}

export default App;
