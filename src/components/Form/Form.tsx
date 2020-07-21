import React, { FC, ReactElement } from 'react';
import {
    StyledForm,
    StyledFormElements,
    StyledFormElementsItem,
    StyledFormFooter,
} from './style';

interface FormProps {
    items: ReactElement[];
    footer?: ReactElement;
    className?: string;
}

export const Form: FC<FormProps> = (props): ReactElement => {
    const { items, footer, className } = props;

    return (
        <StyledForm className={className}>
            <StyledFormElements>
                {items.map((item) => (
                    <StyledFormElementsItem>{item}</StyledFormElementsItem>
                ))}
            </StyledFormElements>

            {footer && (
                <StyledFormFooter>
                    {footer}
                </StyledFormFooter>
            )}
        </StyledForm>
    );
};
