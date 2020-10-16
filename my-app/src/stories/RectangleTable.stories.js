import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import { RectangleTable } from './RectangleTable';

export default {
    title: 'Components/RectangleTable',
    component: RectangleTable,

};

const Template = (args) => <RectangleTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    
    tableID: 'T3',
    numOfChairs:4,
    partyName:'Dmytro',
    reservationTime:new Date(2020,9,15,5,30,0,0),
    occupancyStatus:'Reserved',

};


