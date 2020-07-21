import React from 'react';
import { Button } from 'react-atlantic';
import { Link } from '@reach/router';
import { StyledHomePage, StyledHomePageColumn } from './style';

export const Home = () => {
    return (
        <StyledHomePage>
            <StyledHomePageColumn>
                <Link to="hierarchy">
                    <Button type="primary">Hierarchy</Button>
                </Link>
            </StyledHomePageColumn>
            <StyledHomePageColumn>
                <Link to="calendar">
                    <Button type="primary">Calendar</Button>
                </Link>
            </StyledHomePageColumn>
            <StyledHomePageColumn>
                <Link to="excel">
                    <Button type="primary">Excel</Button>
                </Link>
            </StyledHomePageColumn>
        </StyledHomePage>
    );
};
