import React from "react";
import DinningRoomImage from '../images/DinningRoomImage.png';

function CustomerInfo(){
    return(
        <div>
            <h4 className="font">Customer Info</h4>
            <div className="styleFont customerInfoStyle" >
                As a CheaprEats customer, our new Table Management system will seamlessly integrate with your existing CheaprEats
                app so you can view restaurant floor plans and make reservations for specific tables in your favorite restaurant with the click of a button!
            </div>
            <img className="pt-2" src={DinningRoomImage}  alt="Image of dinning room table" />
        </div>
    );
}

export default CustomerInfo;