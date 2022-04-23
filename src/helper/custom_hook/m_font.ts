import useSWR from 'swr';
import { fetcher } from 'src/helper/common';

export function useFetchFontFamilies() {
  const { data, error } = useSWR('/api/templates/font_family', fetcher);

  return {
    fonts: data,
    isLoading: !error && !data,
    isError: error,
  };
}
