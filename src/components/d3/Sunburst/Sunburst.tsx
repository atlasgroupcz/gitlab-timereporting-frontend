import React, { FC, useEffect, useRef } from 'react';
import { chart } from './d3';
import { StyledSunBurstContainer } from './style/Sunburst.style';

export const Sunburst: FC<{ data: any }> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        svgRef.current && chart(svgRef.current, data);
    }, [data]);

    return (
        <StyledSunBurstContainer>
            <svg ref={svgRef}></svg>
        </StyledSunBurstContainer>
    );
};
