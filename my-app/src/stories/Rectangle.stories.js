import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import { RectangleTable } from './RectangleTable';

export default {
    title: 'Example/RectangleTable',
    component: RectangleTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <RectangleTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};


