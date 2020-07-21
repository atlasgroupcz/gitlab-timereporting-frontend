import React from 'react';
import { DatePicker, Button, Text } from 'react-atlantic';
import { useExcelReportForm } from '../../hooks/forms/useExcelReportForm';
import { StyledExcelReportContainer } from './style/ExcelReport.style';
import { Form } from '../../components/Form';

export const ExcelReport = () => {
    const [
        { values, handleSubmit, setFieldValue, errors },
    ] = useExcelReportForm();

    const onChange = (field: string) => (date: Date | null | undefined) => {
        date && setFieldValue(field, date);
    };
    const onSubmit = handleSubmit as any;
    console.log(errors);

    const formFooter = [
        <Button type="primary" onClick={onSubmit}>
            <Text>Stáhnout soubor</Text>
        </Button>,
    ];

    return (
        <StyledExcelReportContainer>
            <Form footer={formFooter}>
                <Form.Item>
                    <DatePicker
                        placeholder="Od"
                        onChange={onChange('from')}
                        selected={values.from}
                    ></DatePicker>
                </Form.Item>
                <Form.Item>
                    <DatePicker
                        placeholder="Do"
                        onChange={onChange('to')}
                        selected={values.to}
                    ></DatePicker>
                </Form.Item>
            </Form>
        </StyledExcelReportContainer>
    );
};
