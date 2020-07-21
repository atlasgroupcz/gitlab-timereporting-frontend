import styled from 'styled-components';
import { StyledOption } from 'react-atlantic/lib/components/Select/components/Option/Option.style';
import { SingleValue } from 'react-atlantic/lib/components/Select/Select.style';
import { StyledText } from 'react-atlantic/lib/components/Typography/Text/Text.style';
import { Container } from '../../Template/Container';
import { StyledReactDatePickerHeaderContainer } from 'react-atlantic/lib/components/DatePicker/DatePickerHeader/DatePickerHeader.style';

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

export const StyledFormElementsItem = styled.div`
    margin-right: ${(props) => props.theme.margin.lg};
    margin-bottom: ${(props) => props.theme.margin.lg};

    ${StyledReactDatePickerHeaderContainer} {
        box-sizing: content-box;
    }

    ${StyledOption} {
        height: auto;
    }

    ${SingleValue} {
        ${StyledText} {
            margin: 0;
        }
    }
`;

export const StyledFormFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`;
