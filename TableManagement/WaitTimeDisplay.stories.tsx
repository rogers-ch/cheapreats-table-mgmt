import React from 'react';
import { WaitTimeDisplay, IWaitTimeDisplay } from '../../src/Containers/WaitTimeDisplay';
import {Meta, Story} from "@storybook/react";
import { createStoryTitle } from '../Constants';

export default {
    title: createStoryTitle('WaitTimeDisplay'),
    component: WaitTimeDisplay,
} as Meta;

const Template: Story<IWaitTimeDisplay> = (args) => <WaitTimeDisplay {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    AverageWaitTime: new Date(2020,10,14,11,0,0,0),
};
