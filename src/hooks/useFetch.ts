import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_INIT, ROOT } from '../Config';

export const useFetch = <T = any, E = any>(
    input: RequestInfo,
    init: RequestInit = DEFAULT_INIT
): {
    errors: E | undefined;
    data?: T | undefined;
    loading: boolean;
    fetchData: () => void;
} => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T | undefined>();
    const [errors, setErrors] = useState<E | undefined>();

    const reset = useCallback(() => {
        setLoading(false);
        setErrors(undefined);
    }, []);

    const fetchData = useCallback(
        async (inputOverride: RequestInfo = input) => {
            setLoading(true);
            try {
                const res = await fetch(`${ROOT}${inputOverride}`, init);

                const newData = await res.json();

                setData(newData);
            } catch (error) {
                console.error(error);

                setErrors(error);
                setData(undefined);
            } finally {
                setLoading(false);
            }
        },
        [input, init]
    );

    useEffect(() => {
        reset();
        fetchData();
    }, [reset, fetchData]);

    return { loading, data, errors, fetchData };
};
