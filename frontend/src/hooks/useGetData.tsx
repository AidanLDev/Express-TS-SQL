import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { serverUrl } from '../utils/constants';

export const useGetData = <T,>(url: string) => {
  const [data, setData] = useState<T[] | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<Error | null>(null);
  const didRun = useRef<boolean | ((prev: boolean) => boolean)>(false);

  useEffect(() => {
    if (didRun.current) {
      return;
    }

    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}${url}`);
        const data = await response?.data;

        setData(data);
      } catch (err) {
        const error = err as Error;
        setServerError(error);
        console.error("Error getting data for url: ", url);
      } finally {
        setIsLoading(false);
        didRun.current = true;
      }
    };

    fetchData();
  }, [url]);
  return { data, isLoading, serverError };
};
