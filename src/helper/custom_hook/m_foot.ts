import useSWR from 'swr';
import { fetcher } from 'src/helper/common';

export function useFoot() {
  const { data, error } = useSWR('/api/templates/foot_part', fetcher);

  return {
    foots: data,
    isLoading: !error && !data,
    isError: error,
  };
}
