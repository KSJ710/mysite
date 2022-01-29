import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = (): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  });

  return <div>Loading...</div>;
};

export default Index;
