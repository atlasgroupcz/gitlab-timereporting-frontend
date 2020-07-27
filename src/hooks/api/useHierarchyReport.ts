import { useFetch } from '../useFetch';
import { useEffect, useCallback } from 'react';
import { IUserCalendarEntry } from '../../types/IUserCalendarEntry';
import { formatDate } from '../../utils/formatDate';
import { HierarchyType } from '../../types/HierarchyType';
import { hierarchyQueryBuilder } from '../../utils/hierarchyQueryBuilder';

export const useHierarchyReport = (
    from?: Date,
    to?: Date,
    hierarchyQuery?: HierarchyType[]
) => {
    const [fetchData, result] = useFetch<IUserCalendarEntry[]>(
        ``,
        undefined,
        false
    );

    const fetchHierarchyReport = useCallback(
        async (
            fromOverride = from,
            toOverride = to,
            hierarchyQueryOverride = hierarchyQuery
        ) =>
            fetchData(
                `/rest/timelogs/hierarchy?from=${formatDate(
                    fromOverride
                )}&to=${formatDate(toOverride)}&${hierarchyQueryBuilder(
                    hierarchyQueryOverride
                )}`
            ),
        [fetchData, from, to, hierarchyQuery]
    );

    useEffect(() => {
        if (
            typeof from !== 'undefined' &&
            typeof to !== 'undefined' &&
            typeof hierarchyQuery !== 'undefined'
        ) {
            fetchHierarchyReport(from, to, hierarchyQuery);
        }
    }, [fetchHierarchyReport, from, hierarchyQuery, to]);

    return [fetchHierarchyReport, result] as const;
};
