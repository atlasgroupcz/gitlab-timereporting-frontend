import React, { FC, ReactNode } from 'react';
import { StyledForm, StyledFormElements, StyledFormFooter } from './style';
import { Item, ItemProps } from './Item';

interface FormProps {
    FooterComponent?: ReactNode;
    className?: string;
}

export const Form: FC<FormProps> & {
    Item: FC<ItemProps>;
} = (props) => {
    const { FooterComponent: footer, className, children } = props;

    return (
        <StyledForm className={className}>
            <StyledFormElements>{children}</StyledFormElements>
            {footer && <StyledFormFooter>{footer}</StyledFormFooter>}
        </StyledForm>
    );
};

Form.Item = Item;
