import React from 'react';
import { RectangleTable2 } from './RectangleTable2';

export default {
    title: 'Components/RectangleTable2',
    component: RectangleTable2,
};

const Template = (args) =>
    <RectangleTable2 {...args} />;

/**
 *Creates a RectangleTable component with 4 chairs
 */
export const FourTopTable = Template.bind({});
FourTopTable.args = {
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
            isVisible: true },
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
