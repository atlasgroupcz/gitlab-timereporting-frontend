import { useCallback } from 'react';
import { ROOT } from '../../Config';

export const useExcelReport = (
    fromDateString?: string,
    toDateString?: string
) => {
    const getExcelReport = useCallback(
        (
            fromDateStringOverride: string = fromDateString ?? '',
            toDateStringOverride: string = toDateString ?? ''
        ) => {
            window.location.assign(
                `${ROOT}/rest/timelogs/timesheet?from=${fromDateStringOverride}&to=${toDateStringOverride}`
            );
        },
        [fromDateString, toDateString]
    );

    return getExcelReport;
};
