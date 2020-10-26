/*
    Created by:                Corey Rogers
    Date submitted (v1):       10/26/2020
    File:                      RectangleTable.js
    File Description:          Rectangle table in horizontal orientation. Resizable based on number of chairs.
*/

import React from 'react';

import './rectangleTable.css';

interface IRectangleTable {
    /**
     * The unique identifier for the table
     */
    tableID: string,
    /**
     * The number of chairs at the table
     */
    numOfChairs: number,
    /**
     * The name of the party assigned to the table
     */
    partyName: string,
    /**
     * The occupancy status for the table
     */
    occupancyStatus: string,
    /**
     * The seating/reservation time for the party at the table
     */
    reservationTime: Date,
}

/**
 * Primary UI component for user interaction
 */
export const RectangleTable: React.FC = ({
    tableID = 'T1',
    numOfChairs = 4,
    partyName = 'Null',
    occupancyStatus = 'Vacant',
    reservationTime = Date.now(),
    ...props
}: IRectangleTable) => {
    let occupancyColor = getOccupancyColor(occupancyStatus);

    function getOccupancyColor(status) {
        if (occupancyStatus === 'Vacant') {
            return 'success';
        } else if (occupancyStatus === 'Reserved') {
            return 'warning';
        } else {
            return 'info';
        }
    }

    //Determine the number of columns based on numOfChairs
    const colNumber = numOfChairs / 2;

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
        <div className={'tableWidth' + numOfChairs}>
            <div>
                <div className="row m-0">
                    {[...Array(colNumber)].map((e, i) => (
                        <div className="col" key={i}>
                            <div className="row">
                                <div className="col-6 m-auto bg-secondary topChairBorder chairHeight"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="tableBorder bg-secondary tableHeight m-1">
                <div className="row m-0">
                    <div className="col-6 p-0">
                        <div className="row m-0 h-25">
                            <div className="col-6 mx-auto mt-3 text-light">
                                {tableID}
                            </div>
                        </div>
                        <div className="row m-0 h-25"></div>
                        <div className="row m-0 h-50">
                            <div className="col-6 mx-auto mt-5">
                                <div className="text-white">{partyName}</div>
                                <div className={'text-' + occupancyColor}>
                                    {occupancyStatus}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-0"></div>
                    <div
                        className={[
                            'col-2',
                            'bg-' + occupancyColor,
                            'tableColor',
                            'p-0',
                        ].join(' ')}
                    ></div>
                </div>
            </div>

            <div>
                <div className="row m-0">
                    {[...Array(colNumber)].map((e, i) => (
                        <div className="col" key={i}>
                            <div className="row">
                                <div className="col-6 m-auto bg-secondary bottomChairBorder chairHeight"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
