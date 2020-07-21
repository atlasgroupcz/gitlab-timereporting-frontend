import React, { FC, ReactElement } from 'react';
import { StyledForm, StyledFormElements, StyledFormFooter } from './style';
import { Item, ItemProps } from './Item';
import { useComposition } from 'react-atlantic/lib';

interface FormProps {
    footer?: ReactElement[];
    className?: string;
}

export const Form: FC<FormProps> & {
    Item: FC<ItemProps>;
} = (props): ReactElement => {
    const { footer, className, children } = props;
    const { getFilteredChildren } = useComposition();

    const items = getFilteredChildren(children, Form.Item.displayName);

    return (
        <StyledForm className={className}>
            <StyledFormElements>
                {items.map((item, index) => (
                    <Form.Item key={index} {...item.props}>{item.props?.children}</Form.Item>
                ))}
            </StyledFormElements>

            {footer && <StyledFormFooter>{footer}</StyledFormFooter>}
        </StyledForm>
    );
};

Form.Item = Item;
