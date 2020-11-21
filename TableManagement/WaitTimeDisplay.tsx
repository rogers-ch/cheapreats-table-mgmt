import React from 'react';
import styled from "styled-components";
import {PieChart} from "recharts";

export interface IWaitTimeDisplay {
    AverageWaitTime: Date,
}

export const WaitTimeDisplay: React.FC<IWaitTimeDisplay>
    = ({
           AverageWaitTime = Date,
            ...props
       }) => {


    function getColor(AverageWaitTime: Number){
        if(AverageWaitTime >= 30){
            return 'red';
        } else if(AverageWaitTime >= 15 && AverageWaitTime <= 30){
            return 	'yellow';
        } else {
            return 'green'
        }
    }

    function getTimeDifference(AverageWaitTime: Date){
        const differance = Math.abs(Date.now() - AverageWaitTime );
        return Math.floor(differance/ 60000);
    }

    return (
        <Row>
            <div>
                <PieChart AverageWaitTime={getColor(getTimeDifference(AverageWaitTime))} DegreeAngle={getTimeDifference(AverageWaitTime)} ></PieChart>
            </div>

            <TextFormatting>
                <div>
                    <TextAvgWait>Avg. Wait</TextAvgWait>
                    <TextTime> {getTimeDifference(AverageWaitTime)} Min</TextTime>
                </div>
            </TextFormatting>

        </Row>
    );
};

const TextAvgWait = styled.div`
    font-size: 3rem;
`;

const TextTime = styled.div`
    font-size: 3rem;
`;

const TextFormatting = styled.div`
    padding-left: 15rem;
    padding-top: 2rem;
`;

const Row = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-right: 15px;
        margin-left: 15px;
`;
    
const PieChart = styled.div`
        flex-basis: 0;
        max-width: 100%;
        display: block; 
        position: absolute; 
        width: 200px; 
        height: 200px; 
        border-radius: 50%; 
        
        background-image: conic-gradient( 
            ${ ({AverageWaitTime}) => AverageWaitTime } ${({DegreeAngle}) => DegreeAngle * 6 }deg,  
            grey 0 235deg  
            ); 
`;