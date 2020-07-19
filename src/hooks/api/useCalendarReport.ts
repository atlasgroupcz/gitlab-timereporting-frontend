import { useFetch } from '../useFetch';
import { useEffect, useCallback } from 'react';
import { IUserCalendarEntry } from '../../types/IUserCalendarEntry';

export const useCalendarReport = (year?: number, userId?: number) => {
    const [fetchData, result] = useFetch<IUserCalendarEntry[]>(
        ``,
        undefined,
        false
    );

    const fetchCalendarReport = useCallback(
        async (year: number, userId: number) =>
            fetchData(`/rest/timelogs/userCalendar/${year}/${userId}`),
        [fetchData]
    );

    useEffect(() => {
        if (typeof year !== 'undefined' && typeof userId !== 'undefined') {
            fetchCalendarReport(year, userId);
        }
    }, [fetchCalendarReport, userId, year]);

    return [fetchCalendarReport, result] as const;
};
