import type { Meta, StoryObj } from '@storybook/react';
import { Operation } from './Operation';
import { createRandomOperation } from '@/homeworks/ts1/3_write';

const meta: Meta<typeof Operation> = {
  title: 'Forms/Operation',
  component: Operation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Create: Story = {};

const operation = createRandomOperation(new Date().toString());

export const Update: Story = {
  args: {
    operation: operation,
  },
};
