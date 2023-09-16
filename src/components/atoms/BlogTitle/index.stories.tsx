import { Meta, StoryObj } from '@storybook/react';

import { BlogTitle } from '.';

export default {
    title: 'Atoms/BlogTitle',
    component: BlogTitle,
} as Meta<typeof BlogTitle>;

type Story = StoryObj<typeof BlogTitle>;

export const Default: Story = {
    args: {
        title: 'Blog Title',
    },
};
