import styled from '@emotion/styled';

import { Label } from 'components/atoms/Label';
import { InputText } from 'components/atoms/InputText';

const InputGroup = styled.div`
    margin-bottom: 16px;
`;

interface Props {
    readonly label: string;
    readonly value: string;
    readonly placeholder: string;
    readonly onChange: (text: string) => void;
}

export const Input = ({ label, value, placeholder, onChange }: Props) => {
    return (
        <InputGroup>
            <Label text={label} />
            <InputText value={value} placeholder={placeholder} onChange={onChange} />
        </InputGroup>
    );
};
