import { useFetch } from '../useFetch';

export const useDateReports = (
    fromDateString: string,
    toDateString: string
) => {
    const result = useFetch(
        `/rest/timelogs/hierarchy?from=${fromDateString}&to=${toDateString}`
    );
    return result;
};
