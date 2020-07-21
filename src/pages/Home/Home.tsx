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
                        <Button type="primary">Zobrazit v hierarchii</Button>
                    </Link>
                </StyledHomePageColumnContent>
            </StyledHomePageColumn>
            <StyledHomePageColumn>
                <StyledHomePageColumnContent>
                    <StyledHomePageIcon name={'calendar'} />
                    <Link to="calendar">
                        <Button type="primary">Zobrazit v kalendáři</Button>
                    </Link>
                </StyledHomePageColumnContent>
            </StyledHomePageColumn>
            <StyledHomePageColumn>
                <StyledHomePageColumnContent>
                    <StyledHomePageIcon name={'excel'} />
                    <Link to="excel">
                        <Button type="primary">Export do souboru</Button>
                    </Link>
                </StyledHomePageColumnContent>
            </StyledHomePageColumn>
        </StyledHomePage>
    );
};
