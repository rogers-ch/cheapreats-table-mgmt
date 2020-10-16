import React from 'react';
import PropTypes from 'prop-types';

import './rectangleTable.css';

/**
 * Primary UI component for user interaction
 */
export const RectangleTable = ({ tableID, partyName, numOfChairs, occupancyStatus, reservationTime, ...props }) => {

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

    //Determine the number of columns based on numOfChairs
    const colNumber = numOfChairs/2;


    /*
    const renderOccupancyStatus = (occupancyStatus)=> {
      
        if(occupancyStatus !== 'Vacant') {
        
            return <div className="text-white">{reservationTime}</div>

        } else {
            return;
        }
    
    }
    */


    return (
        <div className={"tableWidth" + numOfChairs}>
            <div>
                <div className="row m-0">
                    {[...Array(colNumber)].map((e, i) => 
                        <div className="col">
                            <div className="row">
                                <div className="col-6 m-auto bg-secondary topChairBorder chairHeight">
                                    
                                </div>
                            </div>
                        </div>

                    )}
                    
                </div>  
            </div>
    
            <div
                className= "tableBorder bg-secondary tableHeight m-1"
            >
                <div className="row m-0">
                    <div className="col-6 p-0">
                        <div className="row m-0 h-25">
                            <div className="col-6 mx-auto mt-3 text-light">
                                {tableID}
                            </div>
                        </div>
                        <div className="row m-0 h-25">
                        </div>
                        <div className="row m-0 h-50">
                            <div className="col-6 mx-auto mt-5">
                                <div className="text-white">{partyName}</div>
                                <div className={'text-' + occupancyColor}>{occupancyStatus}</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-4 p-0">
                        
                    </div>
                    <div className={['col-2', 'bg-' + occupancyColor, 'tableColor', 'p-0'].join(' ')}>
                        
                    </div>

                </div>
                
            </div>
        
            <div>
                <div className="row m-0">
                    {[...Array(colNumber)].map((e, i) => 
                        <div className="col">
                            <div className="row">
                                <div className="col-6 m-auto bg-secondary bottomChairBorder chairHeight">
                                    
                                </div>
                            </div>
                        </div>

                    )}
                    
                </div>
                
                    
            </div>

            
        </div>
    );
};

RectangleTable.propTypes = {
    /**
     * The unique identifier for the table
     */
    tableID: PropTypes.string,
    /**
     * The number of chairs at the table
     */
    numOfChairs: PropTypes.number,
    /**
     * The name of the party assigned to the table
     */
    partyName: PropTypes.string,
    /**
     * The occupancy status for the table
     */
    occupancyStatus: PropTypes.string,
    /**
     * The seating/reservation time for the party at the table
     */
    reservationTime: PropTypes.Date(),
};

RectangleTable.defaultProps = {
    tableID: 'T1',
    numOfChairs: 4,
    partyName: 'Null',
    occupancyStatus: 'Vacant',
    reservationTime: Date.now(),
};