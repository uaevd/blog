import { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

export default {
    title: 'Molecules/Input',
    component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Title: Story = {
    args: {
        label: 'Title',
        value: '',
        placeholder: 'Write Title Here...',
    },
};

export const Body: Story = {
    args: {
        label: 'Body',
        value: '',
        placeholder: 'Write Body Here...',
    },
};
