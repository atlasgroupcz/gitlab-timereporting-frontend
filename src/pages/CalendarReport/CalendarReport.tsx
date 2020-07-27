import React, { useMemo } from 'react';
import { Text, Button } from 'react-atlantic';
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
import { Select as UserSelect } from '../../components/UserSelect';
import { OptionType } from 'react-atlantic/lib/components/Select/Select.utils';

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

    const memoizedOptions: OptionType[] | undefined = useMemo(
        () =>
            userData &&
            userData.map(
                ({ id, name, email }) =>
                    ({
                        label: (
                            <Column>
                                <Text type="primary">{name}</Text>
                                <Text type="default">{email}</Text>
                            </Column>
                        ),
                        value: id,
                    } as OptionType)
            ),
        [userData]
    );

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
                    <UserSelect
                        onChange={({ value }) => onChange('userId')(value)}
                        value={values.userId}
                        options={memoizedOptions}
                    ></UserSelect>
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
