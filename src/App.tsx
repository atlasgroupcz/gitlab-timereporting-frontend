import React from 'react';

import { AtlanticProvider, theme } from 'react-atlantic';
import { ThemeProvider } from 'styled-components';
import { Index } from './pages';
export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AtlanticProvider theme={theme}>
                <Index></Index>
            </AtlanticProvider>
        </ThemeProvider>
    );
};
