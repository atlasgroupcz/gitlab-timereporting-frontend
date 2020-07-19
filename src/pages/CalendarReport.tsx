import React from 'react';
import { Option, Select, Text, Button } from 'react-atlantic';
import { Box, Column } from '../components/container';
import { useUsers } from '../hooks/api/useUsers';
import { StyledOption } from 'react-atlantic/lib/components/Select/components/Option/Option.style';
import { styled } from '../utils/styled';
import { useCalendarReportForm } from '../hooks/forms/useCalendarReportForm';
import { YearSelect } from '../components/YearSelect';
import { Calendar } from '../components/d3/Calendar';

export const CalendarReport = () => {
    const [, { data: userData }] = useUsers();

    const [
        { values, handleSubmit, setFieldValue },
        { data: calendarData },
    ] = useCalendarReportForm();

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
                {userData &&
                    userData.map(({ id, name, email }) => (
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
            {calendarData && <Calendar data={calendarData} />}
        </StyledSelectContainer>
    );
};

const StyledSelectContainer = styled(Box)`
    ${StyledOption} {
        height: auto;
    }
`;
