import React, { FC } from 'react';

import { AtlanticProvider, theme } from 'react-atlantic';
import { ThemeProvider } from 'styled-components';
import { Index } from './pages';
import { ValidationSchemasProvider } from './context/ValidationSchemas';

export const App: FC = () => {
    return (
        <ValidationSchemasProvider>
            <ThemeProvider theme={theme}>
                <AtlanticProvider theme={theme}>
                    <Index></Index>
                </AtlanticProvider>
            </ThemeProvider>
        </ValidationSchemasProvider>
    );
};
