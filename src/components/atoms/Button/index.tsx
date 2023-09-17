import styled from '@emotion/styled';

interface ContainerProps {
    readonly color: string;
}

const Container = styled.button<ContainerProps>`
    border: 0;
    color: #fff;
    background-color: ${(props) => props.color};
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 1;
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

interface Props {
    readonly label: string;
    readonly color?: string;
    readonly onClick?: () => void;
}

export const Button = ({ label, color = '#ff5722', onClick }: Props) => (
    <Container color={color} onClick={onClick}>
        {label}
    </Container>
);
