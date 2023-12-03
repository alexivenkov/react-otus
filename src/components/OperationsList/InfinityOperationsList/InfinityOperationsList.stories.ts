import type { Meta, StoryObj } from '@storybook/react';
import { InfinityOperationsList } from './InfinityOperationsList';

const meta: Meta<typeof InfinityOperationsList> = {
  title: 'Components/InfinityOperationsList',
  component: InfinityOperationsList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
