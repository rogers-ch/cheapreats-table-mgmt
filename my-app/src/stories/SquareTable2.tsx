/**
 * Documentation – the order of chairs are in the chairs array will populate the table from top left to the bottom right
 * “the purpose of the order in the array is to populate the chairs from top left to bottom right”
 */
import React from 'react';
import styled from 'styled-components';
import { IChair } from './Chair';
import { ChairRow } from './ChairRow';
import {MainTheme} from "../Themes";

type getTableSizeType = (
    top: number,
    bottom: number,
    left: number,
    right: number,
) => number;

export interface ISquareTable {
    /**
     * The unique identifier for the table
     */
    tableID: string;
    /**
     * The name of the party assigned to the table
     */
    partyName: string;
    /**
     * The occupancy status for the table
     */
    occupancyStatus: occupancyStatusTypes;
    /**
     * Array of chairs
     */
    chairs: Array<IChair>;
    /**
     * The size for the component relative to the parent
     */
    relativeSize: number,
}

enum occupancyStatusTypes {
    Vacant = 'Vacant',
    Reserved = 'Reserved',
    Occupied = 'Occupied',
}

/**
 * Primary UI component for user interaction
 * Square Table
 */
export const SquareTable2: React.FC<ISquareTable> = ({
    tableID = 'T1',
    partyName = 'Null',
    occupancyStatus = occupancyStatusTypes.Vacant,
    chairs = [],
    relativeSize= 1.0,

    ...props
}) => {
    /**
     * Split chairs array into four arrays for each table side
     */
    const topArray = chairs.filter((i) => i.position === 'top');
    const rightArray = chairs.filter((i) => i.position === 'right');
    const leftArray = chairs.filter((i) => i.position === 'left');
    const bottomArray = chairs.filter((i) => i.position === 'bottom');

    /**
     * Get proper theme color for the table
     */
    const colors = MainTheme.colors;

    /**
     * This function will determine how many chair to put per each side
     * of the table (left, right, top, bottom)
     * @param top {number} - Number of chairs on top side
     * @param bottom {number} - Number of chairs on bottom side
     * @param left {number} - Number of chairs on left side
     * @param right {number} - Number of chairs on right side
     * @return {number} - The largest number of chairs
     */
    const getTableSize: getTableSizeType = (top, bottom, left, right) => {
        return Math.max(top, bottom, left, right);
    };

    const tableSize = getTableSize(
        topArray.length,
        bottomArray.length,
        leftArray.length,
        rightArray.length,
    );

    /**
     * This function will determine if there are left chairs
     * to correct top or bottom row's margins
     * @return {boolean} - Returns true if there are left chairs, otherwise false
     */
    function isSideChairs() {
        const left = chairs.map((i) => i.position === 'left').length;
        return left > 0;
    }

    /**
     * This function will determine what color should be the Status and ColorDiv
     * and return hexadecimal color value
     *
     * @return {string} - Hexadecimal color value
     */
    function getOccupancyColor(): string {
        switch (occupancyStatus) {
            case occupancyStatusTypes.Vacant:
                return colors.occupancyStatusColors.Vacant;

            case occupancyStatusTypes.Reserved:
                return colors.occupancyStatusColors.Reserved;

            case occupancyStatusTypes.Occupied:
                return colors.occupancyStatusColors.Occupied;

            default:
                return '';
        }
    }

    return (
        <div {...props}>
            {/** chairs top */}
            <ChairRow
                relativeSize={relativeSize}
                position="top"
                chairs={topArray}
                sideChairs={isSideChairs()}
            />

            {/** table itself */}
            <div>
                <Row relativeSize={relativeSize}>
                    {/** chairs left */}
                    <ChairRow
                        relativeSize={relativeSize}
                        position="left"
                        chairs={leftArray}
                        sideChairs={isSideChairs()}
                    />

                    <TableBody chairNumOnSide={tableSize} relativeSize={relativeSize}>
                        <Row relativeSize={relativeSize}>
                            <TableInfo relativeSize={relativeSize}>
                                <div>
                                    {`${tableID}\n${partyName}`}
                                    <Status
                                        occupancyColor={getOccupancyColor()}
                                    >
                                        {occupancyStatus}
                                    </Status>
                                </div>
                            </TableInfo>
                            <ColorDiv
                                chairNumOnSide={tableSize}
                                occupancyColor={getOccupancyColor()}
                                relativeSize={relativeSize}
                            />
                        </Row>
                    </TableBody>

                    {/** chairs right */}
                    <ChairRow
                        relativeSize={relativeSize}
                        position="right"
                        chairs={rightArray}
                        sideChairs={isSideChairs()}
                    />
                </Row>
            </div>

            {/** chairs bottom */}
            <ChairRow
                relativeSize={relativeSize}
                position="bottom"
                chairs={bottomArray}
                sideChairs={isSideChairs()}
            />
        </div>
    );
};

/**
 * variables for the styled components
 */

interface ITableBody {
    chairNumOnSide: number;
    relativeSize: number;
}

const TableBody = styled.div<ITableBody>`
    height: ${({ chairNumOnSide, relativeSize }) => chairNumOnSide * 20 * relativeSize}rem;
    width: ${({ chairNumOnSide, relativeSize }) => chairNumOnSide * 20 * relativeSize}rem;
    border-radius: ${({ relativeSize }) => 3 * relativeSize}rem;
    background-color: #6c757d;
`;

interface IColorDiv {
    chairNumOnSide: number;
    occupancyColor: string;
    relativeSize: number;
}

const ColorDiv = styled.div<IColorDiv>`
    height: ${({ chairNumOnSide, relativeSize }) => chairNumOnSide * 20 * relativeSize}rem;
    width: ${({ relativeSize }) => 3 * relativeSize}rem;
    margin-left: auto;
    margin-right: ${({ relativeSize }) => 0.95 * relativeSize}rem;
    border-top-right-radius: ${({ relativeSize }) => 3 * relativeSize}rem;
    border-bottom-right-radius: ${({ relativeSize }) => 3 * relativeSize}rem;
    background-color: ${({ occupancyColor }) => occupancyColor};
`;

interface IRow {
    relativeSize: number;
}

const Row = styled.div<IRow>`
    display: flex;
    flex-wrap: wrap;
    margin-right: ${({ relativeSize }) => -15 * relativeSize}px;
    margin-left: ${({ relativeSize }) => -15 * relativeSize}px;
`;

interface ITableInfo {
    relativeSize: number;
}

const TableInfo = styled.div<ITableInfo>`
    color: #ffffff;
    font-family: Arial, sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: ${({ relativeSize }) => 2 * relativeSize}rem;
    margin-left: ${({ relativeSize }) => 3 * relativeSize}rem;
    white-space: pre-line;
`;

interface IStatus {
    occupancyColor: string;
}

const Status = styled.div<IStatus>`
    color: ${({ occupancyColor }) => occupancyColor};
`;
