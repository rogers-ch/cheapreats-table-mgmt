import React from 'react';
import styled from 'styled-components';

export interface ISquareTable {
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
export const SquareTable: React.FC<ISquareTable>
    = ({
           tableID = 'T1',
           numOfChairs = 4,
           partyName = 'Null',
           occupancyStatus = 'Vacant',
           reservationTime = Date.now(),
           relativeSize = 1.0,

           ...props
       }) => {
    const chairNumOnSide= getChairNumOnSide(numOfChairs);

    /**
     * This function will calculate the number of chairs for each table side
     */
    function getChairNumOnSide(num:number){
        if(num%4==0){
            return num/4;
        }
        else{
            return Math.floor(num/4)+1;
        }
    }

    /**
     * This function will determine what color should be the Status and ColorDiv
     */
    function getOccupancyColor(status: string) {
        if (occupancyStatus === 'Vacant') {
            return '#28a745';
        } if (occupancyStatus === 'Reserved') {
            return '#ffc107';
        }
        return '#17a2b8';

    }

    //styled componenets
    const TableBody=styled.div`
        height: ${chairNumOnSide * 20 * relativeSize}rem;
        width: ${chairNumOnSide * 20 * relativeSize}rem;
        border-radius: ${3 * relativeSize}rem;
        background-color: #6c757d;
    `;

    const ColorDiv=styled.div`
        height:${chairNumOnSide * 20 * relativeSize}rem;
        width: ${3 * relativeSize}rem;
        margin-left:auto;
        margin-right: ${0.95 * relativeSize}rem;
        border-top-right-radius: ${3 * relativeSize}rem;
        border-bottom-right-radius: ${3 * relativeSize}rem;
        background-color: ${getOccupancyColor(occupancyStatus)};
        `;

    const TopChair=styled.div`
      border-top-left-radius: ${3 * relativeSize}rem;
      border-top-right-radius: ${3 * relativeSize}rem;
      height: ${2 * relativeSize}rem;
      width: ${10 * relativeSize}rem;
      margin-bottom: ${0.25 * relativeSize}rem;
      margin-left: auto;
      margin-right: auto;
      background-color: #6c757d;
      
    `;

    const LeftChair=styled.div`
      border-top-left-radius: ${3 * relativeSize}rem;
      border-bottom-left-radius: ${3 * relativeSize}rem;
      width: ${2 * relativeSize}rem;
      height: ${10 * relativeSize}rem;
      margin-top:auto;
      margin-bottom: auto;
      margin-right: ${1.25 * relativeSize}rem;
      margin-left: ${1 * relativeSize}rem;
      background-color: #6c757d;
    `;

    const SideChairRow=styled.div`
       display: flex;
       flex-wrap: wrap;
       margin-right: ${-15 * relativeSize}px;
       margin-left: ${-15 * relativeSize}px;
       height: ${20 * relativeSize}rem;
    `;

    const ChairCol=styled.div`
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;

    `;


    const RightChair=styled.div`
        border-top-right-radius: ${3 * relativeSize}rem;
        border-bottom-right-radius: ${3 * relativeSize}rem;
        width: ${2 * relativeSize}rem;
        height: ${10 * relativeSize}rem;
        margin-top:auto;
        margin-bottom: auto;
        margin-left: ${1.25 * relativeSize}rem;
        background-color: #6c757d;
    `;

    const BottomChair=styled.div`
      border-bottom-left-radius: ${3 * relativeSize}rem;
      border-bottom-right-radius: ${3 * relativeSize}rem;
      height: ${2 * relativeSize}rem;
      width: ${10 * relativeSize}rem;
      margin-top: ${0.25 * relativeSize}rem;
      margin-left: auto;
      margin-right: auto;
      background-color: #6c757d;
     `;

    const Row=styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-right: ${-15 * relativeSize}px;
        margin-left: ${-15 * relativeSize}px;
    `;

    const TableInfo=styled.div`
        margin-top: ${2 * relativeSize}rem;
        margin-left: ${3 * relativeSize}rem;
        text-align: left;
    
    `;

    const TobBottomRow=styled.div`
        display: flex;
        flex-wrap: wrap;
        width: ${chairNumOnSide * 20 * relativeSize}rem;
        margin-left: ${1.6 * relativeSize}rem;
    `;

    const Status=styled.div`
       color: #fff;
      font-weight: bold;
    `;

    const StyledParagraph=styled.div`
        color: #fff;
        font-size: 0.8em;
    `;

    return (

        <div>

            {/*chairs top*/}

                <TobBottomRow>
                    {[...Array(chairNumOnSide)].map((e,i) =>
                    <ChairCol>
                        <TopChair  key={i}/>
                    </ChairCol>
                    )}

                </TobBottomRow>

            {/*table itself*/}
            <div>
                <Row>

                    {/*chairs left*/}
                    <div>
                        {[...Array(chairNumOnSide)].map((e,i) =>
                            <SideChairRow>
                                <LeftChair></LeftChair>
                            </SideChairRow>
                        )}          
                    </div>

                    <TableBody>
                        <Row>
                            <TableInfo>
                                <StyledParagraph>
                                    {tableID}<br></br>
                                    {partyName} <br></br>
                                    <Status>{occupancyStatus}</Status><br></br>
                                </StyledParagraph>
                                
                            </TableInfo>

                            <ColorDiv />

                        </Row>
                        
                    </TableBody>

                    {/*chairs right*/}
                    <div>
                        {[...Array(chairNumOnSide)].map((e,i) =>
                            <SideChairRow>
                                <RightChair></RightChair>
                            </SideChairRow>
                        )}   
                    </div>
                </Row>
            </div>

            {/*chairs bottom*/}
            <div>
                <TobBottomRow>
                    
                {[...Array(chairNumOnSide)].map((e,i) =>

                    <ChairCol>
                        <BottomChair key={i} />
                    </ChairCol>

                    )}
                </TobBottomRow>

            </div>

        </div>
    );
};

