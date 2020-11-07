import React from 'react';

import { SquareTable } from './SquareTable';
export default {
    title: 'Components/SquareTable',
    component: SquareTable,
};
const Template = (args) => <SquareTable {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    tableID: 'T1',
    numOfChairs:4,
    partyName:'Dmytro',
    reservationTime:new Date(2020,10,15,16,30,0,0),
    occupancyStatus:'Vacant',
};


export const Secondary = Template.bind({});
Secondary.args = {
    tableID: 'T2',
    numOfChairs:8,
    partyName:'Scott',
    reservationTime:new Date(2020,10,15,16,30,0,0),
    occupancyStatus:'Reserved',
};


export const Large = Template.bind({});
Large.args = {
    tableID: 'T4',
    numOfChairs:12,
    partyName:'Corey',
    reservationTime:new Date(2020,10,15,16,30,0,0),
    occupancyStatus:'Occupied',
};




