import useSWR from 'swr';
import { fetcher } from 'src/helper/common';

export function useCity() {
  const { data, error } = useSWR('/api/m_city/index', fetcher);

  return {
    cities: data,
    isLoading: !error && !data,
    isError: error,
  };
}
