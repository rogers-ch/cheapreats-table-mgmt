/*
    Created by:                Level Up team
    Date submitted:            12/08/2020
    File:                      Chair.tsx
    File Description:          This component creates chairs for use in the table components. Chair styles adjust
                               to create the correct chair based on whether the chair is round or rectangular and
                               which side of the table the chair is placed on. Chair styles also adjust based on
                               whether a chair is visible or not and whether a chair is occupied.
*/

import React from 'react';
import styled from 'styled-components';
import { MainTheme } from '../Themes'

// Define a type for Position to restrict to four specific values
type Position = 'top' | 'bottom' | 'left' | 'right';

export interface IChair {
    /**
     * The position of the chair relative to the table (top/bottom/left/right)
     */
    position: Position;
    /**
     * Boolean value for whether someone is seated in the chair
     * True if someone is seated in the chair, otherwise false
     */
    isSeated: boolean;
    /**
     * Name of Person Sitting on Chair
     */
    occupiedBy: string;
    /**
     * Determines if the chair will be visible or not
     */
    isVisible: boolean;
    /**
     * Boolean value for whether the chair is round.
     * True if the chair is round, otherwise false.
     */
    isRound?: boolean;
    /**
     * The size for the component relative to the parent
     */
    relativeSize: number,
}

/**
 * Primary UI component for user interaction
 */
export const Chair: React.FC<IChair> = ({
    position = 'top',
    isSeated = false,
    occupiedBy = '',
    isVisible = true,
    isRound = false,
    relativeSize= 1.0,
    ...props
}) => {

    /**
     * Returns a JSX element for the Chair with the correct styles
     * @returns {JSX.Element} the correct JSX.Element based on position,
     * or null if no position is provided
     */
    const chairSwitch: () => JSX.Element | null = () => {
        switch (position) {
            case 'top':
                return (
                    <TopChair
                        relativeSize={relativeSize}
                        isSeated={isSeated}
                        isVisible={isVisible}
                    >
                        <TextTopBottom relativeSize={relativeSize}>{occupiedBy}</TextTopBottom>
                    </TopChair>
                );
            case 'bottom':
                return (
                    <BottomChair
                        relativeSize={relativeSize}
                        isSeated={isSeated}
                        isVisible={isVisible}
                    >
                        <TextTopBottom relativeSize={relativeSize}>{occupiedBy}</TextTopBottom>
                    </BottomChair>
                );
            case 'left':
                return (
                    <LeftChair
                        relativeSize={relativeSize}
                        isSeated={isSeated}
                        isVisible={isVisible}
                    >
                        <TextLeftRight relativeSize={relativeSize}>{occupiedBy}</TextLeftRight>
                    </LeftChair>
                );
            case 'right':
                return (
                    <RightChair
                        relativeSize={relativeSize}
                        isSeated={isSeated}
                        isVisible={isVisible}
                    >
                        <TextLeftRight relativeSize={relativeSize}>{occupiedBy}</TextLeftRight>
                    </RightChair>
                );
            default:
                return null;
        }
    };

    if (isRound) {
        return (
            <div {...props}>
                <RoundChair relativeSize={relativeSize} isSeated={isSeated} isVisible={isVisible}>
                    <RoundText relativeSize={relativeSize}>{occupiedBy}</RoundText>
                </RoundChair>
            </div>
        );
    }

    return (
        <div {...props}>
            {chairSwitch()}
        </div>
    );
};

/**
 * This function will determine what color the chair will be
 * @param isSeated {boolean} - indicated is chair is taken/occupied
 * @return {string} - Hexadecimal of color
 */
function getChairColor(isSeated: boolean) {
    const colors = MainTheme.colors;

    if (isSeated) {
        return colors.chairOccupiedBackground;
    }

    return colors.chairTableBackground;
}

/**
 * variables for the styled components
 */

const BaseChair = styled.div<Pick<IChair, 'isVisible' | 'isSeated'>>`
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    background-color: ${({ isSeated }) => getChairColor(isSeated)};
`;

const TopChair = styled(BaseChair)<Pick<IChair, 'relativeSize'>>`
    border-top-left-radius: ${({ relativeSize }) => relativeSize * 3}rem;
    border-top-right-radius: ${({ relativeSize }) => relativeSize * 3}rem;
    height: ${({ relativeSize }) => relativeSize * 3}rem;
    width: ${({ relativeSize }) => relativeSize * 10}rem;
    margin-bottom: ${({ relativeSize }) => relativeSize * 0.25}rem;
    margin-left: auto;
    margin-right: auto;
`;

const LeftChair = styled(BaseChair)<Pick<IChair, 'relativeSize'>>`
    border-top-left-radius: ${({ relativeSize }) => relativeSize * 3}rem;
    border-bottom-left-radius: ${({ relativeSize }) => relativeSize * 3}rem;
    width: ${({ relativeSize }) => relativeSize * 3}rem;
    height: ${({ relativeSize }) => relativeSize * 10}rem;
    margin: ${({ relativeSize }) => relativeSize * 1.25}rem;
`;

const RightChair = styled(BaseChair)<Pick<IChair, 'relativeSize'>>`
    border-top-right-radius: ${({ relativeSize }) => relativeSize * 3}rem;
    border-bottom-right-radius: ${({ relativeSize }) => relativeSize * 3}rem;
    width: ${({ relativeSize }) => relativeSize * 3}rem;
    height: ${({ relativeSize }) => relativeSize * 10}rem;
    margin: ${({ relativeSize }) => relativeSize * 1.25}rem;
`;

const BottomChair = styled(BaseChair)<Pick<IChair, 'relativeSize'>>`
    border-bottom-left-radius: ${({ relativeSize }) => relativeSize * 3}rem;
    border-bottom-right-radius: ${({ relativeSize }) => relativeSize * 3}rem;
    height: ${({ relativeSize }) => relativeSize * 3}rem;
    width: ${({ relativeSize }) => relativeSize * 10}rem;
    margin-top: ${({ relativeSize }) => relativeSize * 0.25}rem;
    margin-left: auto;
    margin-right: auto;
`;

const TextBase = styled.div<Pick<IChair, 'relativeSize'>>`
    color: #ffffff;
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const TextTopBottom = styled(TextBase)<Pick<IChair, 'relativeSize'>>`
    width: ${({ relativeSize }) => relativeSize * 9}rem;
    margin-left: ${({ relativeSize }) => relativeSize * 0.65}rem;
    padding-top: ${({ relativeSize }) => relativeSize * 0.35}rem;
`;

const TextLeftRight = styled(TextBase)<Pick<IChair, 'relativeSize'>>`
    height: 90%;
    padding-top: ${({ relativeSize }) => relativeSize * 0.5}rem;
    margin-left: ${({ relativeSize }) => relativeSize * 0.5}rem;
    writing-mode: vertical-rl;
`;

const RoundChair = styled(BaseChair)<Pick<IChair, 'relativeSize'>>`
    border-radius: 50%;
    width: ${({ relativeSize }) => relativeSize * 6.5}rem;
    height: ${({ relativeSize }) => relativeSize * 6.5}rem;
    border: ${({ relativeSize }) => relativeSize * 2}px solid black;
`;

const RoundText = styled(TextBase)<Pick<IChair, 'relativeSize'>>`
    padding: ${({ relativeSize }) => relativeSize * 2.0}em 0;
`;
