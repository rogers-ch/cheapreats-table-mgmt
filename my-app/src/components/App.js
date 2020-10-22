import React from 'react';
import '../css/App.css';

import { ButtonComponent } from './ButtonComponent';
import MainContainer from './MainContainer';
import Nav from './Nav';
import Modal from './Modal';

function App () {

  return (
    <div className="App">
      <Nav />
      <MainContainer />
      <Modal />
    </div>
  );
}

export default App;
