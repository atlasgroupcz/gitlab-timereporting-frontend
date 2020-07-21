import styled from 'styled-components';
import { Router } from '@reach/router';

export const StyledRouterContainer = styled(Router)`
  height: 100%;
  min-height: 100%;
  background-color: ${props => props.theme.color.default};
`;
