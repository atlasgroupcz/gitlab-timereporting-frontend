import React from 'react';
import { Button, Icon } from 'react-atlantic';
import { StyledHeaderContainer } from './style';
import { useNavigate } from '@reach/router';
export const Header = () => {
    const navigate = useNavigate();

    return (
        <StyledHeaderContainer>
            <Button onClick={() => navigate('../')}>
                <Icon name={'arrowLeft'} />
            </Button>
        </StyledHeaderContainer>
    );
};
