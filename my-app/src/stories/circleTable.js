import React from 'react';
import PropTypes from 'prop-types';

import './circleTable.css';

/**
 * Primary UI component for user interaction
 */
export const CircleTable = ({ tableID, partyName, numOfChairs, occupancyStatus, reservationTime, ...props }) => {

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
        <div>
            <div
                className= "tableHeight border-3"
            >
                <div className="row m-0">
                    <div className="col-6 p-0">
                        <div className="row m-0 h-25">

                        </div>
                        <div className="row m-0 h-25">
                        </div>
                        <div className="row m-0 h-50">
                            <div className="col-6 mx-auto mt-5">
                                <div className="text-light">
                                    {tableID}
                                </div>
                                <div className="text-white">{partyName}</div>
                                <div className={'text-' + occupancyColor}>{occupancyStatus}</div>
                            </div>
                        </div>

                    </div>
                    <div className="col-4 p-0">

                    </div>

                </div>

            </div>

        </div>
    );
};

CircleTable.propTypes = {

    tableID: PropTypes.string,

    numOfChairs: PropTypes.number,

    partyName: PropTypes.string,

    occupancyStatus: PropTypes.string,

    reservationTime: PropTypes.Date(),
};

CircleTable.defaultProps = {
    tableID:"T1",
    numOfChairs:4,
    partyName:"Null",
    occupancyStatus:"Vacant",
    reservationTime:Date.now()
};