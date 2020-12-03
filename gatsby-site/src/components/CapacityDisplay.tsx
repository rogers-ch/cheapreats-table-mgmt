import React from 'react';
import styled from 'styled-components';

export interface ICapacityDisplay {     
    /**
     * Total number of occupied seats
     */
    totalSeatsOccupied: number;
    /**
     * Total number of seats
     */
    totalNumberOfSeats: number;
}

/**
 * Primary UI component for user interaction
 */
export const CapacityDisplay: React.FC<ICapacityDisplay> = ({
totalSeatsOccupied = 0,
totalNumberOfSeats = 0,
...props
}) => {

    const colors = {
        text: '#4a4a4a',
        border: 'rgba(0,0,0,0.1)',
        background: '#ffffff',
        primary: '#EE2434',

    };

    const capacityPercent = Math.ceil(
        (totalSeatsOccupied / totalNumberOfSeats) * 100,
    );

    return (
        <BorderBox
            textColor={colors.text}
            borderColor={colors.border}
            backgroundColor={colors.background}
            {...props}
        >
            <Row>
                <Col3>
                    <PieBox
                        capacityPercent={capacityPercent}
                        borderColor={colors.border}
                        backgroundColor={colors.background}
                        pieFillColor={colors.primary}
                    />
                </Col3>
                <Col8>
                    <TitleDiv>Current Capacity</TitleDiv>
                    <PercentDiv>{`${capacityPercent}% Full`}</PercentDiv>
                </Col8>
            </Row>
        </BorderBox>
    );
};

/**
 * Styled component variables
 */
interface IBorderBox {
    textColor: string;
    borderColor: string;
    backgroundColor: string;
}

const BorderBox = styled.div<IBorderBox>`
    border: 0.1em solid ${({ borderColor }) => borderColor};
    border-radius: 0.5em;
    background-color: ${({ backgroundColor }) => backgroundColor};
    height: 5.5rem;
    width: 20rem;
    color: ${({ textColor }) => textColor};
`;

interface IPieBox {
    capacityPercent: number;
    borderColor: string;
    backgroundColor: string;
    pieFillColor: string;
}

const PieBox = styled.div<IPieBox>`
    flex-basis: 0;
    max-width: 100%;
    display: block;
    position: absolute;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: 0 0 0 0.1em ${({ borderColor }) => borderColor};
    background-image: conic-gradient(
        ${({ pieFillColor }) => pieFillColor}
            ${({ capacityPercent }) => capacityPercent * 3.6}deg,
        ${({ backgroundColor }) => backgroundColor} 0 270deg
    );
`;

const TitleDiv = styled.div`
    padding-left: 1rem;
    font-size: 1rem;
    color: white;
`;

const PercentDiv = styled.div`
    padding-left: 0.5rem;
    font-size: 2rem;
    color: white;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 15px;
    margin-left: 15px;
`;

const Col = styled.div`
    position: relative;
    width: 100%;
    padding-top: 0.5rem;
`;

const Col3 = styled(Col)`
    flex: 0 0 25%;
    max-width: 25%;
`;

const Col8 = styled(Col)`
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    padding-left: 15px;
    padding-right: 15px;
`;