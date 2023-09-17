import { Meta, StoryObj } from '@storybook/react';

import { AppTitle } from '.';

export default {
    title: 'Atoms/AppTitle',
    component: AppTitle,
} as Meta<typeof AppTitle>;

type Story = StoryObj<typeof AppTitle>;

export const Default: Story = {};
