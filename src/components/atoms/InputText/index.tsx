import styled from '@emotion/styled';

const Input = styled.input`
    font-size: 1.2rem;
`;

interface Props {
    readonly value: string;
    readonly placeholder: string;
    readonly onChange: (text: string) => void;
}

export const InputText = ({ value, placeholder, onChange }: Props) => (
    <Input value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
);
