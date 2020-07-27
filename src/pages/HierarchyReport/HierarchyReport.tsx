import React from 'react';
import { Button, DatePicker, Option, Select, Text } from 'react-atlantic';
import { useHierarchyReportForm } from '../../hooks/forms/useHierarchyReportForm';

import { Sunburst } from '../../components/d3/Sunburst';
import { HierarchyType } from '../../types/HierarchyType';
import {
    StyledHierarchyContainer,
    StyledHierarchyContent,
    StyledHierarchyForm,
} from './style';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { ErrorMessage } from '../../components/ErrorMessage';

const HIERARCHY_ELEMENTS: HierarchyType[] = [
    'ISSUE',
    'NAMESPACE',
    'PRODUCT',
    'PROJECT',
    'USER',
];

export const HierarchyReport = () => {
    const [
        { values, handleSubmit, setFieldValue, errors, status },
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

    let formFooter = [
        <Button type="primary" onClick={onSubmit}>
            <Text>Zobrazit</Text>
        </Button>,
        <Button type="default" onClick={resetHierarchy}>
            <Text>Resetovat</Text>
        </Button>,
    ];

    return (
        <StyledHierarchyContainer>
            <Header />
            <StyledHierarchyForm FooterComponent={formFooter}>
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
                {values.hierarchy.map((element, i) => (
                    <Form.Item isFullWidth>
                        <Select
                            key={i}
                            onChange={({ value }) =>
                                onChangeHierarchy(value, i)
                            }
                            value={element}
                        >
                            {renderOptions(element)}
                        </Select>
                    </Form.Item>
                ))}
                {remainingElements.length && (
                    <Form.Item isFullWidth>
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
                    </Form.Item>
                )}
            </StyledHierarchyForm>

            {data && (
                <StyledHierarchyContent>
                    <Sunburst data={data} />
                </StyledHierarchyContent>
            )}
        </StyledHierarchyContainer>
    );
};
