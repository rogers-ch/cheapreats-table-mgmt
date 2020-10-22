import React from 'react';
import '../css/App.css';


import MainContainer from './MainContainer';
import Nav from './Nav';
import Footer from './Footer';

function App () {

  return (
    <div className="App">
      <Nav />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
