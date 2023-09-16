import { Meta, StoryObj } from '@storybook/react';

import { Label } from '.';

export default {
    title: 'Atoms/Label',
    component: Label,
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        text: 'Blog Title',
    },
};
