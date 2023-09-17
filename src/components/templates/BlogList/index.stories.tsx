import { Meta, StoryObj } from '@storybook/react';

import { BlogList } from '.';

export default {
    title: 'Templates/BlogList',
    component: BlogList,
} as Meta<typeof BlogList>;

type Story = StoryObj<typeof BlogList>;

export const Default: Story = {
    args: {
        posts: [
            { id: 1, title: 'blog title 1', body: 'blog body 1' },
            { id: 2, title: 'blog title 2', body: 'blog body 2' },
            { id: 3, title: 'blog title 3', body: 'blog body 3' },
            { id: 4, title: 'blog title 4', body: 'blog body 4' },
            { id: 5, title: 'blog title 5', body: 'blog body 5' },
            { id: 6, title: 'blog title 6', body: 'blog body 6' },
        ],
    },
};
