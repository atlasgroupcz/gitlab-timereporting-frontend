import React, { FC, useEffect, useRef } from 'react';
import { styled } from '../../../utils/styled';
import { Box } from '../../container';
import { chart } from './d3';

export const Sunburst: FC<{ data: any }> = ({ data }) => {
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
    width: 60%;
`;
