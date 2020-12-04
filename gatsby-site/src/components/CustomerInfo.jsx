import React from "react";
import DiningRoomLightBackground from '../images/DiningRoomLightBackground.png';
import './../css/App.css';
import styled from 'styled-components';
function CustomerInfo(){
    return(
        <div>
            <hr></hr>
            <H4>Customized Management for Restaurant Owners</H4>
            <div className="styleFont customerInfoStyle" >

                <ul>
                    <li>CheaprEats Table Management gives you the power to manage your entire restaurant from a
                        single dashboard!</li><br/>

                    <li>Design your dining areas, seat customers, make and track reservations,
                        and record orders with ease. </li><br/>

                    <li>Our Table Management app lets you track customer interactions
                        from end to end, so you can track your business information in a single location.</li>
                    <br/>
                </ul>

            </div>
            <IMG src={DiningRoomLightBackground}  alt="Dining Room Demo with Five Tables" />
        </div>
    );
}

/**
 * Styled components css
 */
const H4 = styled.h4`
    padding-top: 1.5rem;
`;

const IMG = styled.img`
    padding-top: 1.5rem;
    width: 75%;
`;

export default CustomerInfo;