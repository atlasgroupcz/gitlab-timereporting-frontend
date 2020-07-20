import React, { FC } from 'react';
import { AtlanticProvider, theme } from 'react-atlantic';
import { ThemeProvider } from 'styled-components';

import { ValidationSchemasProvider } from './context/ValidationSchemas';
import { CalendarReport } from './pages/CalendarReport';
import { Router, RouteComponentProps } from '@reach/router';
import { Home } from './pages/Home';
import { ExcelReport } from './pages/ExcelReport';
import { HierarchyReport } from './pages/HierarchyReport';

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
                    <Router>
                        <HomeRoute path="/" />
                        <ExcelReportRoute path="excel" />
                        <CalendarReportRoute path="calendar" />
                        <HierarchyReportRoute path="hierarchy" />
                    </Router>
                </AtlanticProvider>
            </ThemeProvider>
        </ValidationSchemasProvider>
    );
};
