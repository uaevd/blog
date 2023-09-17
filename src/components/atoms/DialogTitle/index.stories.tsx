import { Meta, StoryObj } from '@storybook/react';

import { DialogTitle } from '.';

export default {
    title: 'Atoms/DialogTitle',
    component: DialogTitle,
} as Meta<typeof DialogTitle>;

type Story = StoryObj<typeof DialogTitle>;

export const Default: Story = {
    args: {
        title: 'Add Blog Post',
    },
};
