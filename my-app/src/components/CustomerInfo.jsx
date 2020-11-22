import React from "react";
import DiningRoomImage from '../images/PictureOfDemo.png';

function CustomerInfo(){
    return(
        <div>
            <hr></hr>
            <h4>Customized Management for Restaurant Owners</h4>
            <div className="styleFont customerInfoStyle" >

                <p>CheaprEats Table Management gives you the power to manage your entire restaurant from a
                    single dashboard!</p>

                <p>Design your dining areas, seat customers, make and track reservations,
                    and record orders with ease. </p>

                <p>Our Table Management app lets you track customer interactions
                    from end to end, so you can track your business information in a single location.</p>

            </div>
            <img className="py-4 w-75" src={DiningRoomImage}  alt="Image of dinning room table" />
        </div>
    );
}

export default CustomerInfo;