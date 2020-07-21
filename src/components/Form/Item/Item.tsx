import React, { FC, ReactElement } from 'react';
import { StyledFormElementsItem } from './style';

export interface ItemProps {
    isFullWidth?: boolean;
}

export const Item: FC<ItemProps> = (props): ReactElement => {
    const { isFullWidth, children } = props;

    return <StyledFormElementsItem isFullWidth={isFullWidth}>{children}</StyledFormElementsItem>;
};

Item.displayName = 'FormItem';
