import React from 'react';
import { Option, Select, Text, Button } from 'react-atlantic';
import { Box, Column } from '../components/container';
import { useUsers } from '../hooks/api/useUsers';
import { StyledOption } from 'react-atlantic/lib/components/Select/components/Option/Option.style';
import { styled } from '../utils/styled';
import { useCalendarReportForm } from '../hooks/forms/useCalendarReportForm';
import { YearSelect } from '../components/YearSelect';
import { Sunburst } from '../components/d3/Sunburst';

export const HierarchyReport = () => {
    const [, { data }] = useUsers();

    const [{ values, handleSubmit, setFieldValue }] = useCalendarReportForm();

    console.log(values);

    const onChange = (field: string) => (option: any) =>
        setFieldValue(field, option);
    const onSubmit = handleSubmit as any;

    return (
        <StyledSelectContainer>
            <Select
                onChange={({ value }) => onChange('userId')(value)}
                value={values.userId}
            >
                {data &&
                    data.map(({ id, name, email }) => (
                        <Option key={id} value={id}>
                            <Column>
                                <Text type="primary">{name}</Text>
                                <Text type="default">{email}</Text>
                            </Column>
                        </Option>
                    ))}
            </Select>
            <YearSelect
                fromYear={2010}
                amount={20}
                onChange={({ value }) => onChange('year')(value)}
                value={values.year}
            />
            <Button type="primary" onClick={onSubmit}>
                Submit
            </Button>
            <Sunburst />
        </StyledSelectContainer>
    );
};

const StyledSelectContainer = styled(Box)`
    ${StyledOption} {
        height: auto;
    }
`;
