import React, { FC, ReactElement } from 'react';
import { StyledContainer } from './style';

interface PageContainerProps {
    className?: string;
}

export const Container: FC<PageContainerProps> = (props): ReactElement => {
    const { className, children } = props;

    return (
        <StyledContainer className={className}>
            {children}
        </StyledContainer>
    );
};
