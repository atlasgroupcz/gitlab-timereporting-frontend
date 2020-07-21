import React, { FC } from 'react';
import { StyledFormElementsItem } from './style';

export interface ItemProps {
    isFullWidth?: boolean;
}

export const Item: FC<ItemProps> = ({ isFullWidth, children }) => (
    <StyledFormElementsItem isFullWidth={isFullWidth}>
        {children}
    </StyledFormElementsItem>
);
