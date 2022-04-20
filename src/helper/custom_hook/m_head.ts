import useSWR from 'swr';
import { fetcher } from 'src/helper/common';

export function useHead() {
  const { data, error } = useSWR('/api/templates/head_part', fetcher);

  return {
    heads: data,
    isLoading: !error && !data,
    isError: error,
  };
}
