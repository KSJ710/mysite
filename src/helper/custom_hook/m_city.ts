import useSWR from 'swr';
import { fetcher } from 'src/helper/common';

export function useCity(id) {
  const { data, error } = useSWR(
    `/api/m_city/index?prefectureId=${id}`,
    fetcher
  );

  return {
    cities: data,
    isLoading: !error && !data,
    isError: error,
  };
}
