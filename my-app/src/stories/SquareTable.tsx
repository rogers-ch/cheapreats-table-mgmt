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
    reservationTime: Date,
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
        height: ${chairNumOnSide*20}rem;
        width: ${chairNumOnSide*20}rem;
        border-radius: 3rem;
        background-color: #6c757d;
    `;

    const ColorDiv=styled.div`
        height:${chairNumOnSide*20}rem;
        width: 3rem;
        margin-left:auto;
        margin-right: .95rem;
        border-top-right-radius: 3rem;
        border-bottom-right-radius: 3rem;
        background-color: ${getOccupancyColor(occupancyStatus)};
        `;

    const TopChair=styled.div`
      border-top-left-radius: 3rem;
      border-top-right-radius: 3rem;
      height: 2rem;
      width: 10rem;
      margin-bottom: 0.25rem;
      margin-left: auto;
      margin-right: auto;
      background-color: #6c757d;
      
    `;

    const LeftChair=styled.div`
      border-top-left-radius: 3rem;
      border-bottom-left-radius: 3rem;
      width: 2rem;
      height: 10rem;
      margin-top:auto;
      margin-bottom: auto;
      margin-right: 1.25rem;
      margin-left: 1rem;
      background-color: #6c757d;
    `;

    const SideChairRow=styled.div`
       display: flex;
       flex-wrap: wrap;
       margin-right: -15px;
       margin-left: -15px;
       height: 20rem;
    `;

    const ChairCol=styled.div`
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;

    `;


    const RightChair=styled.div`
        border-top-right-radius: 3rem;
        border-bottom-right-radius: 3rem;
        width: 2rem;
        height: 10rem;
        margin-top:auto;
        margin-bottom: auto;
        margin-left: 1.25rem;
        background-color: #6c757d;
    `;

    const BottomChair=styled.div`
      border-bottom-left-radius: 3rem;
      border-bottom-right-radius: 3rem;
      height: 2rem;
      width: 10rem;
      margin-top: 0.25rem;
      margin-left: auto;
      margin-right: auto;
      background-color: #6c757d;
     `;

    const Row=styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    `;

    const TableInfo=styled.div`
    color: #f8f9fa;
    margin-top: 2rem;
    margin-left: 3rem;
    
    `;

    const TobBottomRow=styled.div`
        display: flex;
        flex-wrap: wrap;
        width: ${chairNumOnSide*20}rem;
        margin-left: 1rem;
    `;

    const Status=styled.div`
      color: ${getOccupancyColor(occupancyStatus)};
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
                                <p>
                                    {tableID}<br></br>
                                    {partyName} <br></br>
                                    <Status>{occupancyStatus}</Status><br></br>
                                </p>
                                
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

