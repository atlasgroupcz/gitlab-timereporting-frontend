import styled from 'styled-components';
import { Container } from '../../../components/Template/Container';
import { Form } from '../../../components/Form';

export const StyledCalendarReportContainer = styled(Container)``;

export const StyledCalendarReportForm = styled(Form)`
    margin-bottom: ${(props) => props.theme.margin.lg};
`;

export const StyledCalendarReportContent = styled.div`
    overflow: auto;
    background-color: ${(props) => props.theme.color.background.alpha};
    border-radius: ${(props) => props.theme.radius};
    border: 1px solid ${(props) => props.theme.color.border};
`;
