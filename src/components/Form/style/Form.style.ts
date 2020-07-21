import styled from 'styled-components';
import { Container } from '../../Template/Container';
import {StyledButton} from "react-atlantic/lib/components/Button/Button.style";

export const StyledForm = styled(Container)`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.color.background.alpha};
    border-radius: ${(props) => props.theme.radius};
    border: 1px solid ${(props) => props.theme.color.border};
`;

export const StyledFormElements = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledFormFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    
    ${StyledButton} {
      margin-left: ${props => props.theme.margin.lg};
    }
`;
