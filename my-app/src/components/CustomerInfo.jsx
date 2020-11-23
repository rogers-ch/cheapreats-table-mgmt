import React from "react";
import DiningRoomLightBackground from '../images/DiningRoomLightBackground.png';

function CustomerInfo(){
    return(
        <div>
            <hr></hr>
            <h4 className="py-4">Customized Management for Restaurant Owners</h4>
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
            <img className="py-4 w-75" src={DiningRoomLightBackground}  alt="Dining Room Demo with Five Tables" />
        </div>
    );
}

export default CustomerInfo;