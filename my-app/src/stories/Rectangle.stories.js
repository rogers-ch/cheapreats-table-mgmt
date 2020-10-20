import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import { RectangleTable } from './RectangleTable';

export default {
    title: 'Component/RectangleTable',
    component: RectangleTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <RectangleTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tableID: "T3",
    numOfChairs:4,
    partyName:"Dmytro",
    reservationTime:new Date(2020,10,15,16,30,0,0),
    occupancyStatus:"Reserved"
};


