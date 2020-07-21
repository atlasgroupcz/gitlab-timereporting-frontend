import React, { FC } from 'react';
import { AtlanticProvider, theme } from 'react-atlantic';
import { ThemeProvider } from 'styled-components';

import { ValidationSchemasProvider } from './context/ValidationSchemas';
import { CalendarReport } from './pages/CalendarReport';
import { RouteComponentProps } from '@reach/router';
import { GlobalStyle } from './Global.style';
import { Home, ExcelReport, HierarchyReport } from './pages';
import { StyledRouterContainer } from './pages/style';

const HomeRoute = (_props: RouteComponentProps) => <Home />;
const CalendarReportRoute = (_props: RouteComponentProps) => <CalendarReport />;
const ExcelReportRoute = (_props: RouteComponentProps) => <ExcelReport />;
const HierarchyReportRoute = (_props: RouteComponentProps) => (
    <HierarchyReport />
);

export const App: FC = () => {
    return (
        <ValidationSchemasProvider>
            <ThemeProvider theme={theme}>
                <AtlanticProvider theme={theme}>
                    <StyledRouterContainer>
                        <HomeRoute path="/" />
                        <ExcelReportRoute path="excel" />
                        <CalendarReportRoute path="calendar" />
                        <HierarchyReportRoute path="hierarchy" />
                    </StyledRouterContainer>
                    <GlobalStyle />
                </AtlanticProvider>
            </ThemeProvider>
        </ValidationSchemasProvider>
    );
};
