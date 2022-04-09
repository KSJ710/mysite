import useSWR from 'swr';
import { fetcher } from 'src/helper/common';

export function usePrefectures() {
  const { data, error } = useSWR('/api/m_prefectures/index', fetcher);

  return {
    prefectures: data,
    isLoading: !error && !data,
    isError: error,
  };
}
