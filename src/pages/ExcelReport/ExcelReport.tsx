import React from 'react';
import { DatePicker, Button } from 'react-atlantic';
import { Box, Column, Row } from '../../components/container';
import { StyledOption } from 'react-atlantic/lib/components/Select/components/Option/Option.style';
import { styled } from '../../utils/styled';
import { useExcelReportForm } from '../../hooks/forms/useExcelReportForm';

export const ExcelReport = () => {
    const [
        { values, handleSubmit, setFieldValue, errors },
    ] = useExcelReportForm();

    const onChange = (field: string) => (date: Date | null | undefined) => {
        date && setFieldValue(field, date);
    };
    const onSubmit = handleSubmit as any;
    console.log(errors);

    return (
        <StyledSelectContainer>
            <Column>
                <Row>
                    <DatePicker
                        placeholder="From"
                        onChange={onChange('from')}
                        selected={values.from}
                    ></DatePicker>
                </Row>
                <Row>
                    <DatePicker
                        placeholder="To"
                        onChange={onChange('to')}
                        selected={values.to}
                    ></DatePicker>
                </Row>
            </Column>
            <Button type="primary" onClick={onSubmit}>
                Submit
            </Button>
        </StyledSelectContainer>
    );
};

const StyledSelectContainer = styled(Box)`
    ${StyledOption} {
        height: auto;
    }
`;
