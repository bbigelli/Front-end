import React from 'react';
import { Meta, Story } from '@storybook/react';
import { VehicleList, VehicleListProps } from './VehicleList';

export default {
  title: 'Components/VehicleList',
  component: VehicleList,
  argTypes: {
    showPrice: {
      control: 'boolean',
      defaultValue: true,
    },
    columns: {
      control: { type: 'number', min: 1, max: 5, step: 1 },
      defaultValue: 3,
    },
  },
} as Meta;

const Template: Story<VehicleListProps> = (args) => <VehicleList {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithoutPrice = Template.bind({});
WithoutPrice.args = {
  showPrice: false,
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  columns: 2,
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  columns: 4,
};