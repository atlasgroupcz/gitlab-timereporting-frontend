import React, { FC, useEffect, useRef } from 'react';
import { chart } from './d3';
import { StyledIcicleContainer } from './style/Icicle.style';

export const Icicle: FC<{ data: any }> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        svgRef.current && chart(svgRef.current, data);
    }, [data]);

    return (
        <StyledIcicleContainer>
            <svg ref={svgRef}></svg>
        </StyledIcicleContainer>
    );
};
