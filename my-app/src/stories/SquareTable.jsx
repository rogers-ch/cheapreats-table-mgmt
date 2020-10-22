import React from 'react';
import PropTypes from 'prop-types';

import './squareTable.css';


/**
 * Primary UI component for user interaction
 */
export const SquareTable = ({ tableID, partyName, numOfChairs, occupancyStatus, reservationTime, ...props }) => {
    const tableDiv={
        height: (numOfChairs/4*20)+'em',
        width: (numOfChairs/4*20)+'em'
    }

    const colorDiv={
        height:(numOfChairs/4*20)+'em',
        width: "3em",
        marginLeft:"auto",
        marginRight: ".95em"
        
    }

    const chairNumOnSide= numOfChairs/4;


    let occupancyColor = getOccupancyColor(occupancyStatus);

    function getOccupancyColor (status) {

        if (occupancyStatus === "Vacant") {
            return "success";
        } else if (occupancyStatus === "Reserved") {
            return "warning";
        } else {
            return "info";
        }

    }


    return (

        <div className="container">

            {/*chairs top*/}
            <div>
                <div className="row mb-1">
                    {[...Array(chairNumOnSide)].map((e,i) =>
                    <div className="bg-secondary  topChairBorder chairHeight chairSpacing" key={i}>
                                
                    </div>

                    )}
                        
                </div>
                
                    
            </div>

                        
            


    
            {/*table itself*/}
            <div>
                <div className="row">

                    {/*chairs left*/}
                    <div className="mr-1">
                        {[...Array(chairNumOnSide)].map((e,i) =>
                            <div className="bg-secondary leftChairBorder chairWidth marginSide"></div>

                        )}          
                    </div>

                

                    <div className="tableBorder  bg-secondary " style={tableDiv}>
                        <div className="row">
                            <div className="ml-5 mt-5 text-light">
                                <p>
                                    {tableID}<br></br>
                                    {partyName} <br></br>
                                    {occupancyStatus}<br></br>
                                    {reservationTime.getMonth()+"/"+reservationTime.getDate()+"/"+reservationTime.getFullYear()+" "+reservationTime.getHours()+":"+ reservationTime.getMinutes()}

                                </p>
                                
                            </div>
                            

                            <div className={" tableColor bg-"+occupancyColor} style={colorDiv}>
                            
                            </div>

                        </div>
                        
                    </div>
                    
                    

                    {/*chairs right*/}
                    <div className=" ml-1">
                        {[...Array(chairNumOnSide)].map((e,i) =>
                            <div className="bg-secondary rightChairBorder chairWidth marginSide"></div>

                        )}   
                    </div>

                    

                </div>
                
            </div>

            
           
            
                    
            

            {/*chairs bottom*/}
            <div>
                <div className="row mt-1">
                    
                {[...Array(chairNumOnSide)].map((e,i) =>
                    <div className="bg-secondary  bottomChairBorder chairHeight chairSpacing" key={i}>
                                
                    </div>

                    )}
                        
                </div>
                
                    
            </div>

            
        </div>
    );
};

SquareTable.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    tableID: PropTypes.string,
    /**
     * What background color to use
     */
    numOfChairs: PropTypes.number,
    /**
     * How large should the button be?
     */
    partyName: PropTypes.string,
    /**
     * Button contents
     */
    occupancyStatus: PropTypes.string,
    /**
     * Optional click handler
     */
    reservationTime: PropTypes.Date(),
};

SquareTable.defaultProps = {
    tableID:"T1",
    numOfChairs:4,
    partyName:"Null",
    occupancyStatus:"Vacant",
    reservationTime:Date.now()
};