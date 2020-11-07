/*
    Created by:                Corey Rogers
    Date submitted (v2):       ___________
    File:                      RectangleTable.tsx
    File Description:          Rectangle table in horizontal orientation. Resizable based on number of chairs.
*/

import React from 'react';

import styled from 'styled-components';


export interface IRectangleTable {
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
    reservationTime?: Date,
    /**
     * The size for the component relative to the parent
     */
    relativeSize: number,
}

/**
 * Primary UI component for user interaction
 */
export const RectangleTable: React.FC<IRectangleTable>
    = ({
           tableID = 'T1',
           numOfChairs = 4,
           partyName = 'Null',
           occupancyStatus = 'Vacant',
           reservationTime = Date.now(),
           relativeSize = 1.0,

           ...props
       }) => {

    const occupancyColor = getOccupancyColor(occupancyStatus);

    function getOccupancyColor(status: string) {
        if (occupancyStatus === 'Vacant') {
            return '#28a745';
        } if (occupancyStatus === 'Reserved') {
            return '#ffc107';
        }
        return '#17a2b8';

    }

    // Determine the number of columns based on numOfChairs
    const colNumber = numOfChairs / 2;

    const StyledTable = styled.div`
            width: ${numOfChairs * 11 * relativeSize}em;
        `;

    const TopChair = styled.div`
            height: ${3 * relativeSize}em;
            border-top-left-radius: ${3 * relativeSize}rem;
            border-top-right-radius: ${3 * relativeSize}rem;
            flex: 0 0 50%;
            max-width: 50%;
            background-color: #6c757d;
            margin: auto;
        `;

    const TableBody = styled.div`
            height: ${22 * relativeSize}em;
            border-radius: ${3 * relativeSize}rem;
            background-color: #6c757d;
            margin: ${.25 * relativeSize}rem;
            
        `;

    const BottomChair = styled.div`
            height: ${3 * relativeSize}em;
            border-bottom-left-radius: ${3 * relativeSize}rem;
            border-bottom-right-radius: ${3 * relativeSize}rem;
            flex: 0 0 50%;
            max-width: 50%;
            background-color: #6c757d;
            margin: auto;
        `;

    const ColorBand = styled.div`
        border-top-right-radius: ${3 * relativeSize}rem;
        border-bottom-right-radius: ${3 * relativeSize}rem;
        height: ${22 * relativeSize}em;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
        position: relative;
        width: 100%;
        background-color: ${occupancyColor};
    `;

    const Row = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-right: ${15 * relativeSize}px;
        margin-left: ${15 * relativeSize}px;
    `;

    const RowMargin0 = styled(Row)`
        margin: 0;  
    `;

    const RowM0H25 = styled(RowMargin0)`
        height: 25%;  
    `;

    const RowM0H50 = styled(RowMargin0)`
        height: 50%;  
    `;

    const Col = styled.div`
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    `;

    const Col6P0 = styled.div`
        flex: 0 0 50%;
        max-width: 50%;
        position: relative;
        width: 100%;
    `;

    const Col4P0 = styled.div`
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        position: relative;
        width: 100%;
    `;

    const Col6MxAutoMt3TxtLt = styled(Col6P0)`
        padding-right: 15px;
        padding-left: 15px;
        color: #f8f9fa !important;
        margin-left: auto !important;
        margin-right: auto !important;
        margin-top: ${1 * relativeSize}rem !important;
        text-align: left;
        font-size: .8em;
    `;

    const Col6MxAutoMt5 = styled(Col6P0)`
        padding-right: 15px;
        padding-left: 15px;
        margin-left: auto;
        margin-right: auto;
        margin-top: ${3 * relativeSize}rem;
    `;

    const TextWhiteDiv = styled.div`
        color: #fff;
    `;

    const TextOccupancyColor = styled.div`
        color: ${occupancyColor};
    `;


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
        <StyledTable>
            <div>
                <RowMargin0>
                    {[...Array(colNumber)].map((e, i) => (
                        <Col key={i}>
                            <Row>
                                <TopChair />
                            </Row>
                        </Col>
                    ))}
                </RowMargin0>
            </div>

            <TableBody>
                <RowMargin0>
                    <Col6P0>
                        <RowM0H25>
                            <Col6MxAutoMt3TxtLt>
                                {tableID}
                                <TextWhiteDiv>{partyName}</TextWhiteDiv>
                                <TextOccupancyColor>
                                    {occupancyStatus}
                                </TextOccupancyColor>
                            </Col6MxAutoMt3TxtLt>
                        </RowM0H25>
                    </Col6P0>
                    <Col4P0 />
                    <ColorBand />
                </RowMargin0>
            </TableBody>

            <div>
                <RowMargin0>
                    {[...Array(colNumber)].map((e, i) => (
                        <Col key={i}>
                            <Row>
                                <BottomChair />
                            </Row>
                        </Col>
                    ))}
                </RowMargin0>
            </div>
        </StyledTable>
    );
};