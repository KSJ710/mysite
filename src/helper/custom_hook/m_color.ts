import useSWR from 'swr';
import { fetcher } from 'src/helper/common';

export function useColor() {
  const { data, error } = useSWR('/api/templates/color', fetcher);

  return {
    colors: data,
    isLoading: !error && !data,
    isError: error,
  };
}
