import { useFetch } from '../useFetch';

export const useCalendarReports = (year: string, userId: string) => {
    const result = useFetch(`/rest/timelogs/userCalendar/${year}/${userId}`);
    return result;
};
