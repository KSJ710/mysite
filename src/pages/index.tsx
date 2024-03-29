import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Load from 'src/components/common/Load';

export default function Sam(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  });
  return <Load />;
}
