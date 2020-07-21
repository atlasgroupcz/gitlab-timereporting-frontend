import React, { FC, ReactElement } from 'react';
import { StyledPageContainer } from './style';

interface PageContainerProps {
    className?: string;
}

export const PageContainer: FC<PageContainerProps> = (props): ReactElement => {
    const { className, children } = props;

    return (
        <StyledPageContainer className={className}>
            {children}
        </StyledPageContainer>
    );
};
