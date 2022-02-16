import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.push('/app/home');
  });

  return <div>Loading...</div>;
}
