import { useRouter } from 'next/router';
import Home from 'src/components/app/Home';
import MemberNew from 'src/components/app/member/New';

export default function App(): JSX.Element {
  const router = useRouter();
  const { index } = router.query;

  return (
    <>
      {index?.[0] === 'home' ? <Home /> : null}
      {index?.[0] === 'member' && index?.[1] === 'new' ? <MemberNew /> : null}
    </>
  );
}

App.props = {
  layout: 'main',
};
