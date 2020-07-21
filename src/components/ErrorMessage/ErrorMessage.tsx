import React, { FC } from 'react';
import { Text } from 'react-atlantic';
import { firstObjValue } from '../../utils/firstObjValue';

type ErrorsType = object | undefined | string;

interface IErrorMessageProps<T extends ErrorsType = ErrorsType> {
    errors: T;
}

const renderString = (errors: ErrorsType): string => {
    if (!errors) return '';
    return typeof errors === 'string' ? errors : firstObjValue(errors);
};

export const ErrorMessage: FC<IErrorMessageProps> = ({ errors = '' }) => (
    <Text type="error" key={`${errors}`}>
        {renderString(errors)}
    </Text>
);
