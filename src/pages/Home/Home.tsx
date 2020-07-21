import React from 'react';
import { Button } from 'react-atlantic';
import { Box } from '../../components/container';
import { StyledOption } from 'react-atlantic/lib/components/Select/components/Option/Option.style';
import { styled } from '../../utils/styled';
import { Link } from '@reach/router';

export const Home = () => {
    return (
        <StyledSelectContainer>
            <Link to="hierarchy">
                <Button type="primary">Hierarchy</Button>
            </Link>
            <Link to="calendar">
                <Button type="primary">Calendar</Button>
            </Link>
            <Link to="excel">
                <Button type="primary">Excel</Button>
            </Link>
        </StyledSelectContainer>
    );
};

const StyledSelectContainer = styled(Box)`
    ${StyledOption} {
        height: auto;
    }
`;
