import type { Meta, StoryObj } from '@storybook/react';
import { OperationsList } from './OperationsList';
import { Operation, createRandomOperation } from '../../homeworks/ts1/3_write';

const meta: Meta<typeof OperationsList> = {
  title: 'Components/OperationsList',
  component: OperationsList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const operations: Operation[] = [];

operations.push(createRandomOperation(new Date().toUTCString()));
operations.push(createRandomOperation(new Date().toUTCString()));
operations.push(createRandomOperation(new Date().toUTCString()));

export const Default: Story = {
  args: {
    operations: operations,
  },
};
