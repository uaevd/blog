import { Meta, StoryObj } from '@storybook/react';

import { BlogItem } from '.';

export default {
    title: 'Organisms/BlogItem',
    component: BlogItem,
} as Meta<typeof BlogItem>;

type Story = StoryObj<typeof BlogItem>;

export const Defualt: Story = {
    args: {
        title: 'Blog Post Title',
        body: 'Blog Post Body',
    },
};
