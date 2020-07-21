import React, { FC, ReactElement } from 'react';
import { StyledIcon } from './style';
import * as Icons from './../../icons';

type IconName = 'hierarchy' | 'calendar' | 'excel';

interface IconsProps {
    name: IconName;
    className?: string;
}

export const Icon: FC<IconsProps> = (props): ReactElement => {
    const { name, className } = props;
    let SVG;

    switch (name) {
        case 'hierarchy':
            SVG = <Icons.Hierarchy />;
            break;
        case 'calendar':
            SVG = <Icons.Calendar />;
            break;
        case 'excel':
            SVG = <Icons.Excel />;
            break;
        default:
            SVG = <></>;
    }

    return <StyledIcon className={className}>{SVG}</StyledIcon>;
};
