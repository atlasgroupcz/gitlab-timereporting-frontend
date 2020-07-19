import React, { useEffect, useRef } from 'react';
import { styled } from '../../../utils/styled';
import { Box } from '../../container';
import define from './lib/index.js';
//@ts-ignore
import { Runtime, Inspector } from '@observablehq/runtime';

export const Sunburst = () => {
    const svgRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const runtime = new (Runtime as any)();
        runtime.module(define, Inspector.into(svgRef));
    }, []);

    return <StyledContainer ref={svgRef}></StyledContainer>;
};

const StyledContainer = styled(Box)`
    width: 500px;
`;
