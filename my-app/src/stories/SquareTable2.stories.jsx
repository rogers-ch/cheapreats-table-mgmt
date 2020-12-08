/*
    Created by:                Level Up team
    Date submitted:            12/08/2020
    File:                      SquareTable2.stories.jsx
    File Description:          Creates the stories for the SquareTable2 component for display in Storybook.
*/

import React from 'react';
import { SquareTable2 } from './SquareTable2';

export default {
    title: 'Components/SquareTable2',
    component: SquareTable2,
};

const Template = (args) => <SquareTable2 {...args} />;

/**
 *Creates a SquareTable component with 7 chairs
 */
export const SevenTopTable = Template.bind({});
SevenTopTable.args = {
    tableID: 'T1',
    partyName: 'Dmytro',
    occupancyStatus: 'Vacant',
    chairs: [
        {
            position: 'top',
            isSeated: true,
            occupiedBy: 'Scott',
            isVisible: true,
        },
        {
            position: 'top',
            isSeated: false,
            occupiedBy: '',
            isVisible: true
        },
        {
            position: 'left',
            isSeated: false,
            occupiedBy: '',
            isVisible: true
        },
        {
            position: 'left',
            isSeated: true,
            occupiedBy: 'Corey',
            isVisible: true,
        },
        {
            position: 'right',
            isSeated: false,
            occupiedBy: '',
            isVisible: false,
        },
        {
            position: 'right',
            isSeated: true,
            occupiedBy: 'Jack',
            isVisible: true,
        },
        {
            position: 'bottom',
            isSeated: false,
            occupiedBy: '',
            isVisible: true,
        },
        {
            position: 'bottom',
            isSeated: true,
            occupiedBy: 'Sam',
            isVisible: true,
        },
    ],
};
