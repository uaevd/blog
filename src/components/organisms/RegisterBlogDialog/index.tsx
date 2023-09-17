import { useState } from 'react';
import styled from '@emotion/styled';

import { DialogTitle } from 'components/atoms/DialogTitle';
import { Input } from 'components/molecules/Input';
import { Button } from 'components/atoms/Button';

const Container = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Background = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    padding: 32px;
    border-radius: 8px;
    z-index: 1;
`;

const Actions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

interface Props {
    readonly onClose: () => void;
}

export const RegisterBlogDialog = ({ onClose }: Props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const registerPost = () => {
        if (title !== '' && body !== '') {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    userId: 1,
                    title,
                    body,
                }),
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    if (typeof onClose === 'function') onClose();
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <Container>
            <Background />
            <Contents>
                <DialogTitle title="Post Blog" />
                <Input
                    label="Title"
                    value={title}
                    placeholder="Write Title Here..."
                    onChange={(text) => setTitle(text)}
                />
                <Input
                    label="Body"
                    value={body}
                    placeholder="Write Body Here..."
                    onChange={(text) => setBody(text)}
                />
                <Actions>
                    <Button label="Post" onClick={registerPost} />
                    <Button label="Close" color="#304ffe" onClick={onClose} />
                </Actions>
            </Contents>
        </Container>
    );
};
