/*
    Created by:                Level Up team
    Date submitted (v1):       10/26/2020
    File:                      Footer.jsx
    File Description:          This component creates a responsive footer the CheaprEats Table Management homepage
                               using Bootstrap.
*/

import React from 'react';
import styled from "styled-components";
import '../css/App.css';
import logoForCheaprEats from "../images/logoForCheaprEats.png";

//function that will be called in MainContainer component
function Footer() {
    // styling for Footer Header
    const FooterHeading=styled.h4`
      color:red;
      font-size: 1.25rem;
      font-family:Lato, sans-serif;
`;


    //styling for Footer Img
    const img = {
        width: '20px',
        height: '20px'
    }
    //new technology- styled components
    const Link = styled.a`
      color: gray;
      
      font-family:Lato, sans-serif;
      
      font-size: 0.85rem;
      

      &:hover {
        color: red;
      }
    `;


    //this will be returned
    return (
        <footer className='m-3'>
            <div className="container">
                <div className="row">

                    {/*Footer header*/}
                    <div className="col-6">
                        <div className='float-left'>
                            <img className='d-inline-block' src={ logoForCheaprEats } alt="logo For CheaprEats " style={ img }></img>
                            <FooterHeading className='d-inline-block'  >CheaprEats</FooterHeading>
                            <p>Order now, pickup later!</p>
                        </div>
                    </div>

                    {/*Footer links from cheapreats.com*/}
                    <div className="col-2">
                        <h6>Pages</h6>
                        <Link href={'https://cheapreats.com/'} _blank >Home</Link><br></br>
                        <Link href={'https://cheapreats.com/features'} _blank>Features</Link><br></br>
                        <Link href={'https://cheapreats.com/ethics'} _blank>Ethics</Link><br></br>
                        <Link href={'https://cheapreats.com/client'} _blank>Client</Link><br></br>
                        <Link href={'https://cheapreats.com/press'} _blank>Press Kit</Link><br></br>
                        <Link href={'https://cheapreats.com/support'} _blank>Support</Link><br></br>
                        <Link href={'https://cheapreats.com/sitemap'} _blank>Sitemap</Link><br></br>
                    </div>

                    {/*Footer links from cheapreats.com*/}
                    <div className="col-2">
                        <h6>Services</h6>
                        <Link href={'https://dashboard.cheapreats.com/'} _blank>Store Dashboard</Link><br></br>
                        <Link href={'https://terminal.cheapreats.com/'} _blank>POS Terminal</Link>
                    </div>

                    {/*Footer links from cheapreats.com*/}
                    <div className="col-2">
                        <h6>Social Media</h6>
                        <Link href={'https://twitter.com/cheapreats'} _blank>Twitter</Link><br></br>
                        <Link href={'https://www.facebook.com/cheapreats'} _blank>Facebook</Link><br></br>
                        <Link href={'https://www.linkedin.com/company/cheapreats/'} _blank>LinkedIn</Link><br></br>
                        <Link href={'https://github.com/cheapreats'} _blank>Github</Link>
                    </div>

                </div>

            </div>


        </footer>


    );
}

//will export the return to another component
export default Footer;