import React, { useRef, useEffect, FC } from 'react';
import { styled } from '../../../utils/styled';
import { Box } from '../../container';
import { chart } from './d3';
import { IUserCalendarEntry } from '../../../types/IUserCalendarEntry';

interface ICalendarProps {
    data: IUserCalendarEntry[];
}
export const Calendar: FC<ICalendarProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        svgRef.current && chart(svgRef.current, data);
    }, [data]);

    return (
        <StyledContainer>
            <svg ref={svgRef}></svg>
        </StyledContainer>
    );
};

const StyledContainer = styled(Box)`
    width: 1000px;
`;
