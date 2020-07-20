import React from 'react';
import { Button, DatePicker, Option, Select, Text } from 'react-atlantic';
import { Box, Column, Row } from '../components/container';
import { StyledOption } from 'react-atlantic/lib/components/Select/components/Option/Option.style';
import { styled } from '../utils/styled';
import { useHierarchyReportForm } from '../hooks/forms/useHierarchyReportForm';

import { Sunburst } from '../components/d3/Sunburst';
import { HierarchyType } from '../types/HierarchyType';

const HIERARCHY_ELEMENTS: HierarchyType[] = [
    'ISSUE',
    'NAMESPACE',
    'PRODUCT',
    'PROJECT',
    'USER',
];

export const HierarchyReport = () => {
    const [
        { values, handleSubmit, setFieldValue },
        { data },
    ] = useHierarchyReportForm();

    const onChange = (field: string) => (option: any) =>
        setFieldValue(field, option);

    const onPushHierarchy = (value: HierarchyType) =>
        setFieldValue('hierarchy', [...values.hierarchy, value]);

    const onChangeHierarchy = (value: HierarchyType, index: number) => {
        const newHierarchy = [...values.hierarchy];
        newHierarchy[index] = value;
        setFieldValue('hierarchy', newHierarchy);
    };

    const remainingElements = HIERARCHY_ELEMENTS.filter(
        (hierarchyElement) => !values.hierarchy.includes(hierarchyElement)
    );

    const resetHierarchy = () => setFieldValue('hierarchy', []);
    const onSubmit = handleSubmit as any;

    const renderOptions = (element: HierarchyType) => [
        <Option value={element}>
            <Text type="primary">{element}</Text>
        </Option>,
        ...remainingElements.map((element) => (
            <Option key={element} value={element}>
                <Text key={element}>{element}</Text>
            </Option>
        )),
    ];
    console.log(data);

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

            {values.hierarchy.map((element, i) => (
                <Select
                    key={i}
                    onChange={({ value }) => onChangeHierarchy(value, i)}
                    value={element}
                >
                    {renderOptions(element)}
                </Select>
            ))}
            <Select
                placeholder="Další"
                value={''}
                onChange={({ value }) => onPushHierarchy(value)}
            >
                {remainingElements.map((element) => (
                    <Option key={element} value={element}>
                        <Text>{element}</Text>
                    </Option>
                ))}
            </Select>
            <Button type="primary" onClick={onSubmit}>
                Submit
            </Button>
            <Button type="default" onClick={resetHierarchy}>
                Reset
            </Button>
            {data && <Sunburst data={data} />}
        </StyledSelectContainer>
    );
};

const StyledSelectContainer = styled(Box)`
    ${StyledOption} {
        height: auto;
    }
`;
