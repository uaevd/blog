import { Meta, StoryObj } from '@storybook/react';

import { InputText } from '.';

export default {
    title: 'Atoms/InputText',
    component: InputText,
} as Meta<typeof InputText>;

type Story = StoryObj<typeof InputText>;

export const TitleInput: Story = {
    args: {
        value: '',
        placeholder: 'Write Title Here...',
    },
};

export const BodyInput: Story = {
    args: {
        value: '',
        placeholder: 'Write Title Here...',
    },
};
