import React from 'react';
import '../css/App.css';
import MainContainer from './MainContainer';
import Nav from './Nav';

function App () {

  return (
    <div className="App">
      <Nav />
      <MainContainer />
    </div>
  );
}

export default App;
