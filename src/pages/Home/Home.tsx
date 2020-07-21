import React from 'react';
import { Button, useDevice } from 'react-atlantic';
import { Link } from '@reach/router';
import {
    StyledHomePage,
    StyledHomePageColumn,
    StyledHomePageColumnContent,
    StyledHomePageIcon,
} from './style';

export const Home = () => {
    const { currentDevice } = useDevice();

    return (
        <StyledHomePage currentDevice={currentDevice}>
            <StyledHomePageColumn>
                <StyledHomePageColumnContent>
                    <StyledHomePageIcon name={'hierarchy'} />
                    <Link to="hierarchy">
                        <Button type="primary">Hierarchy</Button>
                    </Link>
                </StyledHomePageColumnContent>
            </StyledHomePageColumn>
            <StyledHomePageColumn>
                <StyledHomePageColumnContent>
                    <StyledHomePageIcon name={'calendar'} />
                    <Link to="calendar">
                        <Button type="primary">Calendar</Button>
                    </Link>
                </StyledHomePageColumnContent>
            </StyledHomePageColumn>
            <StyledHomePageColumn>
                <StyledHomePageColumnContent>
                    <StyledHomePageIcon name={'excel'} />
                    <Link to="excel">
                        <Button type="primary">Excel</Button>
                    </Link>
                </StyledHomePageColumnContent>
            </StyledHomePageColumn>
        </StyledHomePage>
    );
};
