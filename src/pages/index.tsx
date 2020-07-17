import React, { useState } from 'react';
import { Option, Select, Text, DatePicker, Button } from 'react-atlantic';
import { Box, Column, Row } from '../components/container';
import { useUsers } from '../hooks/api/useUsers';
import { StyledOption } from 'react-atlantic/lib/components/Select/components/Option/Option.style';
import { styled } from '../utils/styled';

export const Index = () => {
    const { data } = useUsers();
    const [value, setValue] = useState(null);
    const [dateFrom, setDateFrom] = useState<Date | null | undefined>(null);
    const [dateTo, setDateTo] = useState<Date | null | undefined>(null);

    return (
        <StyledSelectContainer>
            <Column>
                <Row>
                    <DatePicker
                        placeholder="From"
                        onChange={setDateFrom}
                        selected={dateFrom}
                    ></DatePicker>
                </Row>
                <Row>
                    <DatePicker
                        placeholder="To"
                        onChange={setDateTo}
                        selected={dateTo}
                    ></DatePicker>
                </Row>
            </Column>
            <Select onChange={setValue} value={value}>
                {data &&
                    data.map(({ id, name, email }) => (
                        <Option value={id}>
                            <Column>
                                <Text type="primary">{name}</Text>
                                <Text type="default">{email}</Text>
                            </Column>
                        </Option>
                    ))}
            </Select>
            <Button type="primary">Submit</Button>
        </StyledSelectContainer>
    );
};

const StyledSelectContainer = styled(Box)`
    ${StyledOption} {
        height: auto;
    }
`;
