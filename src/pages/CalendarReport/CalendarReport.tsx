import React from 'react';
import { Option, Select, Text, Button } from 'react-atlantic';
import { Column } from '../../components/container';
import { useUsers } from '../../hooks/api/useUsers';
import { useCalendarReportForm } from '../../hooks/forms/useCalendarReportForm';
import { YearSelect } from '../../components/YearSelect';
import { Calendar } from '../../components/d3/Calendar';
import {
    StyledCalendarReportContainer,
    StyledCalendarReportContent,
    StyledCalendarReportForm,
} from './style';
import { Container } from '../../components/Template/Container';

export const CalendarReport = () => {
    const [, { data: userData }] = useUsers();

    const [
        { values, handleSubmit, setFieldValue },
        { data: calendarData },
    ] = useCalendarReportForm();

    const onChange = (field: string) => (option: any) =>
        setFieldValue(field, option);
    const onSubmit = handleSubmit as any;

    const formItems = [
        <Select
            onChange={({ value }) => onChange('userId')(value)}
            value={values.userId}
            placeholder={'Vyberte uživatele'}
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
        </Select>,
        <YearSelect
            fromYear={2010}
            amount={20}
            onChange={({ value }) => onChange('year')(value)}
            value={values.year}
            placeholder={'Vyberte rok'}
        />,
    ];

    // TODO: přidat logiku pro konstantu
    const areFieldsFilled = false;
    const formButton = (
        <Button type="primary" onClick={onSubmit} isDisabled={!areFieldsFilled}>
            <Text>Zobrazit kalendář</Text>
        </Button>
    );

    return (
        <StyledCalendarReportContainer>
            <StyledCalendarReportForm items={formItems} footer={formButton} />
            {calendarData && (
                <StyledCalendarReportContent>
                    <Container>
                        <Calendar data={calendarData} />
                    </Container>
                </StyledCalendarReportContent>
            )}
        </StyledCalendarReportContainer>
    );
};
