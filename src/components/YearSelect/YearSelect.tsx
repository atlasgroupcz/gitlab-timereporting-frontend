import React, { FC, useMemo } from 'react';
import { Select, SelectProps, Text, Option } from 'react-atlantic';
import { Column } from '../container';

interface YearSelectProps extends SelectProps {
    fromYear: number;
    amount: number;
    invert?: boolean;
}

const mapYearsToOptions = (from: number, amount: number, invert: boolean) => {
    return new Array(amount).fill(null).map((_n, i) => {
        const next = `${invert ? from - i : from + i}`;
        console.log(next);

        return (
            <Option key={next} value={next}>
                <Column>
                    <Text type="primary">{next}</Text>
                </Column>
            </Option>
        );
    });
};

export const YearSelect: FC<YearSelectProps> = ({
    fromYear,
    amount,
    invert = false,
    ...SelectProps
}) => {
    const options = useMemo(() => mapYearsToOptions(fromYear, amount, invert), [
        amount,
        fromYear,
        invert,
    ]);

    return <Select {...SelectProps}>{options}</Select>;
};
