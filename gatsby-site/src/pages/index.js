/*
    Created by:                Level Up team
    Date submitted (v1):       10/26/2020
    File:                      Index.js
    File Description:          The main entry point for the application. This file was created by Create React App.
*/

import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import '../css/index.css';
import 'popper.js/dist/umd/popper.js';
import '../css/App.css';
import MainContainer from '../components/MainContainer';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SideNav from "../components/sideNav";

export class Home extends React.Component {

    render(){
        return (
            <div className="App">

                <div className="row">
                    <div className="colForSideBar" >
                        <SideNav />
                    </div>
                    <div className="colForRightSide" >
                        <Nav />
                        <MainContainer />
                    </div>

                </div>

                <Footer />
            </div>
        );
    }

}

export default Home;