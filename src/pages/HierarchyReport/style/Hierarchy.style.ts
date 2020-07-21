import styled from 'styled-components';
import { Container } from '../../../components/Template/Container';
import { Form } from '../../../components/Form';

export const StyledHierarchyContainer = styled(Container)`
    background-color: ${(props) => props.theme.color.default};
`;

export const StyledHierarchyForm = styled(Form)`
    margin-bottom: ${(props) => props.theme.margin.lg};
`;

export const StyledHierarchyContent = styled(Container)`
    display: flex;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => props.theme.radius};
    background-color: ${(props) => props.theme.color.background.alpha};
`;
