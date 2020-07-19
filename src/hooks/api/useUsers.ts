import { IUser } from '../../types/IUser';
import { useFetch } from '../useFetch';

export const useUsers = () => {
    const result = useFetch<IUser[]>('/rest/timelogs/users');
    return result;
};
