import React from 'react';
import styled from "styled-components";



import '../css/App.css';

function Footer() {
    const color={
        color:'red'
    }
    const Link = styled.a`
      color: gray;

      &:hover {
        color: red;
      }
    `;



    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-6">

                        <h4 style={color}>CheaprEats</h4>
                        <p>Order now, pickup later!</p>
                    </div>

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

                    <div className="col-2">
                        <h6>Services</h6>
                        <Link href={'https://dashboard.cheapreats.com/'} _blank>Store Dashboard</Link><br></br>
                        <Link href={'https://terminal.cheapreats.com/'} _blank>POS Terminal</Link>
                    </div>

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

export default Footer;