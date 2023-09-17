import { Meta, StoryObj } from '@storybook/react';

import { BlogListPage } from '.';

export default {
    title: 'Pages/BlogListPage',
    component: BlogListPage,
} as Meta<typeof BlogListPage>;

type Story = StoryObj<typeof BlogListPage>;

export const Default: Story = {};
