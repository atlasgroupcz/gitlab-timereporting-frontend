import styled from 'styled-components';
import { Container } from '../../Template/Container';

export const StyledHeaderContainer = styled(Container)`
    display: flex;
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => props.theme.radius};
    background-color: ${(props) => props.theme.color.background.alpha};
    margin-bottom: ${(props) => props.theme.margin.lg};
`;
