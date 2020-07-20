import React, { FC, useEffect, useRef } from 'react';
import { styled } from '../../../utils/styled';
import { Box } from '../../container';
import { chart } from './d3';
import { data } from './data';

export const Sunburst: FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        svgRef.current && chart(svgRef.current, data);
    }, []);

    return (
        <StyledContainer>
            <svg ref={svgRef}></svg>
        </StyledContainer>
    );
};

const StyledContainer = styled(Box)`
    width: 60%;
`;
