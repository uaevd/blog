import { Meta, StoryObj } from '@storybook/react';

import { BlogBody } from '.';

export default {
    title: 'Atoms/BlogBody',
    component: BlogBody,
} as Meta<typeof BlogBody>;

type Story = StoryObj<typeof BlogBody>;

export const Default: Story = {
    args: {
        body: 'Blog Article',
    },
};
