import styled, { css } from 'styled-components';
import { Icon } from '../../../components/Icon';
import { DeviceType } from 'react-atlantic/lib';

interface StyledHomePageProps {
    currentDevice: DeviceType;
}

export const StyledHomePageColumn = styled.div`
    position: relative;
    max-width: calc((100% / 3) - 30px);
    width: 260px;
    border: 2px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => props.theme.radius};

    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

export const StyledHomePageColumnContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const StyledHomePageIcon = styled(Icon)`
    margin-bottom: ${(props) => props.theme.margin.xl};

    && {
        svg {
            height: 100px;
            width: 100px;
        }
    }
`;

export const StyledHomePage = styled.div<StyledHomePageProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 100%;

    ${(props) =>
    (props.currentDevice === 'mobile' ||
        props.currentDevice === 'tabletVertical') &&
    css`
            flex-direction: column;
            margin: ${props.theme.margin.lg};
            
            ${StyledHomePageColumn} {
              margin-bottom: ${props.theme.margin.lg};
              max-width: calc(100% - 30px);
              
              &:last-child {
                margin-bottom: 0;
              }
            }
        `}
`;
