/*
    Created by:                Level Up team
    File:                      CustomerInfo.jsx
    File Description:          This component contains additional information for customers about the
                               table management system.
*/

import React from "react";

function CustomerInfo(){
    return(
        <div>
            <hr></hr>
            <h4 className="py-4">Customized Management for Restaurant Owners</h4>
            <div className="styleFont customerInfoStyle" >

                <ul className="list-unstyled">
                    <li>CheaprEats Table Management gives you the power to manage your entire restaurant from a
                        single dashboard!</li><br/>

                    <li>Design your dining areas, seat customers, make and track reservations,
                        and record orders with ease. </li><br/>

                    <li>Our Table Management app lets you track customer interactions
                        from end to end, so you can track your business information in a single location.</li>
                    <br/>
                </ul>

            </div>

        </div>
    );
}

export default CustomerInfo;