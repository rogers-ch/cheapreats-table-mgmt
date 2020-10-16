import React from 'react';
import PropTypes from 'prop-types';

import './rectangleTable.css';

/**
 * Primary UI component for user interaction
 */
export const RectangleTable = ({ tableID, partyName, numOfChairs, occupancyStatus, reservationTime, ...props }) => {

    return (
        <div>
            <div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-6 m-auto bg-primary topChairBorder chairHeight">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="row">
                            <div className="col-6 m-auto bg-primary topChairBorder chairHeight">
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                    
            </div>
    
            <div
                className= "tableBorder bg-secondary tableHeight"
            >
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            {tableID}
                        </div>
                        <div className="row">
                            {partyName}
                        </div>
                        
                    </div>
                    <div className="col-5">
                        
                    </div>
                    <div className="col-1 bg-warning tableColor">
                        
                    </div>

                </div>

            
                
            </div>
        
            <div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-6 m-auto bg-primary  bottomChairBorder chairHeight">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-6 m-auto bg-primary  bottomChairBorder chairHeight">
                                
                            </div>
                        </div>
                    </div>
                    
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
    tableID:"T1",
    numOfChairs:4,
    partyName:"Null",
    occupancyStatus:"Vacant",
    reservationTime:Date.now()
};