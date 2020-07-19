import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_INIT, ROOT } from '../Config';

type DataOrErrorsType<T, E> = {
    data?: T | undefined;
    errors?: E | undefined;
};

type ResultType<T, E> = DataOrErrorsType<T, E> & {
    loading: boolean;
};

type FetchDataType<T, E> = (
    inputOverride?: RequestInfo
) => Promise<DataOrErrorsType<T, E>>;

type UseFetchReturnType<T, E> = [FetchDataType<T, E>, ResultType<T, E>];

export const useFetch = <T = any, E = any>(
    input: RequestInfo,
    init: RequestInit = DEFAULT_INIT,
    autoFetch = true
): UseFetchReturnType<T, E> => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T | undefined>();
    const [errors, setErrors] = useState<E | undefined>();

    const reset = useCallback(() => {
        setErrors(undefined);
    }, []);

    const fetchData: FetchDataType<T, E> = useCallback(
        async (inputOverride: RequestInfo = input) => {
            reset();
            setLoading(true);
            try {
                const res = await fetch(`${ROOT}${inputOverride}`, init);
                const newData = await res.json();
                setData(newData);
                setLoading(false);
                return { data: newData };
            } catch (error) {
                console.error(error);
                setErrors(error);
                setLoading(false);
                return { errors: error };
            }
        },
        [input, reset, init]
    );

    useEffect(() => {
        autoFetch && fetchData();
    }, [fetchData, autoFetch]);

    return [fetchData, { loading, data, errors }];
};
