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
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { ErrorMessage } from '../../components/ErrorMessage';

const INITIAL_YEAR = 2020;

export const CalendarReport = () => {
    const [, { data: userData }] = useUsers();

    const [
        { values, handleSubmit, setFieldValue, errors, status },
        { data: calendarData },
    ] = useCalendarReportForm();

    const onChange = (field: string) => (option: any) =>
        setFieldValue(field, option);
    const onSubmit = handleSubmit as any;

    return (
        <StyledCalendarReportContainer>
            <Header />
            <StyledCalendarReportForm
                FooterComponent={
                    <Button type="primary" onClick={onSubmit}>
                        <Text>Zobrazit kalendář</Text>
                    </Button>
                }
            >
                <Form.Item>
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
                    </Select>
                    <ErrorMessage errors={errors.userId} />
                </Form.Item>
                <Form.Item>
                    <YearSelect
                        fromYear={INITIAL_YEAR}
                        amount={new Date().getFullYear() - INITIAL_YEAR + 1}
                        onChange={({ value }) => onChange('year')(value)}
                        value={values.year}
                        placeholder={'Vyberte rok'}
                    />
                    <ErrorMessage errors={errors.year || status} />
                </Form.Item>
            </StyledCalendarReportForm>
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
