import styled, { css } from 'styled-components';
import { StyledReactDatePickerHeaderContainer } from 'react-atlantic/lib/components/DatePicker/DatePickerHeader/DatePickerHeader.style';
import { StyledOption } from 'react-atlantic/lib/components/Select/components/Option/Option.style';
import {
    SingleValue,
    SelectContainer,
} from 'react-atlantic/lib/components/Select/Select.style';
import { StyledText } from 'react-atlantic/lib/components/Typography/Text/Text.style';

interface StyledFormElementsItemProps {
    isFullWidth?: boolean;
}

export const StyledFormElementsItem = styled.div<StyledFormElementsItemProps>`
    margin-right: ${(props) => props.theme.margin.lg};
    margin-bottom: ${(props) => props.theme.margin.lg};

    ${(props) =>
        props.isFullWidth &&
        css`
            width: 100%;
        `}
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
    ${SelectContainer} {
        width: 250px;
    }
`;
