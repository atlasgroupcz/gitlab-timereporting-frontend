import React from 'react';
import { DatePicker, Button, Text } from 'react-atlantic';
import { useExcelReportForm } from '../../hooks/forms/useExcelReportForm';
import { StyledExcelReportContainer } from './style/ExcelReport.style';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { ErrorMessage } from '../../components/ErrorMessage';

export const ExcelReport = () => {
    const [
        { values, handleSubmit, setFieldValue, errors, status },
    ] = useExcelReportForm();

    const onChange = (field: string) => (date: Date | null | undefined) => {
        date && setFieldValue(field, date);
    };
    const onSubmit = handleSubmit as any;

    const formFooter = [
        <Button type="primary" onClick={onSubmit}>
            <Text>Stáhnout soubor</Text>
        </Button>,
    ];

    return (
        <StyledExcelReportContainer>
            <Header />
            <Form FooterComponent={formFooter}>
                <Form.Item>
                    <DatePicker
                        placeholder="Od"
                        onChange={onChange('from')}
                        selected={values.from}
                    ></DatePicker>
                    <ErrorMessage errors={errors.from} />
                </Form.Item>
                <Form.Item>
                    <DatePicker
                        placeholder="Do"
                        onChange={onChange('to')}
                        selected={values.to}
                    ></DatePicker>
                    <ErrorMessage errors={errors.to || status} />
                </Form.Item>
            </Form>
        </StyledExcelReportContainer>
    );
};
