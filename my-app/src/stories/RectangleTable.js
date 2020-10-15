import React from 'react';
import PropTypes from 'prop-types';

import './rectangleTable.css';

/**
 * Primary UI component for user interaction
 */
export const RectangleTable = ({ tableID, partyName, numOfChairs, occupancyStatus, reservationTime, ...props }) => {
    //const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-6 m-auto bg-primary  topChairBorder chairHeight">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="row">
                            <div className="col-6 m-auto bg-primary  topChairBorder chairHeight">
                                
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

RectangleTable.defaultProps = {
    tableID:"T1",
    numOfChairs:4,
    partyName:"Null",
    occupancyStatus:"Vacant",
    reservationTime:Date.now()
};