import useSWR from 'swr';
import { fetcher } from 'src/helper/common';

export function useTemplate() {
  const { data, error } = useSWR(`/api/sample_list/index`, fetcher);

  return {
    sampleList: data,
    isLoading: !error && !data,
    isError: error,
  };
}
