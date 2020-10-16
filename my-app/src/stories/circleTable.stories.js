import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import { CircleTable } from './circleTable';

export default {
    title: 'Component/circleTable',
    component:  CircleTable,
    argTypes: {
        
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <CircleTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tableID: "T3",
    numOfChairs:4,
    partyName:"Dmytro",
    reservationTime:new Date(2020,10,15,16,30,0,0),
    occupancyStatus:"Reserved"
};

