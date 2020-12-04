//10/23/2020
//This is footer for the landing page
//It will be using bootstrap

import React from 'react';
import styled from "styled-components";
import '../css/App.css';
import logoForCheaprEats from "../images/logoForCheaprEats.png";

//function that will be called in MainContainer component
function Footer() {

    //this will be returned
    return (
        <FooterMain>
                <Row>
                    {/*Footer header*/}
                    <ColLg>
                        <FloatLeft>
                            <IMG src={ logoForCheaprEats } alt="logo For CheaprEats "></IMG>
                            <FooterHeading>CheaprEats</FooterHeading>
                            <p>Order now, pickup later!</p>
                        </FloatLeft>
                    </ColLg>

                    {/*Footer links from cheapreats.com*/}
                    <ColSm>
                        <h6>Pages</h6>
                        <Link href={'https://cheapreats.com/'} _blank >Home</Link><br></br>
                        <Link href={'https://cheapreats.com/features'} _blank>Features</Link><br></br>
                        <Link href={'https://cheapreats.com/ethics'} _blank>Ethics</Link><br></br>
                        <Link href={'https://cheapreats.com/client'} _blank>Client</Link><br></br>
                        <Link href={'https://cheapreats.com/press'} _blank>Press Kit</Link><br></br>
                        <Link href={'https://cheapreats.com/support'} _blank>Support</Link><br></br>
                        <Link href={'https://cheapreats.com/sitemap'} _blank>Sitemap</Link><br></br>
                    </ColSm>

                    {/*Footer links from cheapreats.com*/}
                    <ColSm>
                        <h6>Services</h6>
                        <Link href={'https://dashboard.cheapreats.com/'} _blank>Store Dashboard</Link><br></br>
                        <Link href={'https://terminal.cheapreats.com/'} _blank>POS Terminal</Link>
                    </ColSm>

                    {/*Footer links from cheapreats.com*/}
                    <ColSm>
                        <h6>Social Media</h6>
                        <Link href={'https://twitter.com/cheapreats'} _blank>Twitter</Link><br></br>
                        <Link href={'https://www.facebook.com/cheapreats'} _blank>Facebook</Link><br></br>
                        <Link href={'https://www.linkedin.com/company/cheapreats/'} _blank>LinkedIn</Link><br></br>
                        <Link href={'https://github.com/cheapreats'} _blank>Github</Link>
                    </ColSm>

                </Row>

        </FooterMain>

    );
}

/**
 * Styled components for footer
 */

const FloatLeft=styled.div`
  float: left;
`;

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

const ColLg=styled(Col)`
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
`;

const ColSm=styled(Col)`
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
`;
const FooterMain=styled.footer`
      margin: 1rem;
`;

// styling for Footer Header
const FooterHeading=styled.h4`
      color:red;
      font-size: 1.25rem;
      font-family:Lato, sans-serif;
      display: inline-block;
`;


//styling for Footer Img
const IMG = styled.img`
      width: 20px;
      height: 20px;
      display: inline-block;
`;


//new technology- styled components
const Link = styled.a`
      color: gray;
      
      font-family:Lato, sans-serif;
      
      font-size: 0.85rem;
      

      &:hover {
        color: red;
      }
`;

//will export the return to another component
export default Footer;