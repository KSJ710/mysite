import { useRouter } from 'next/router';
import Home from 'src/components/pages/Home';
import MemberNew from 'src/components/pages/member/New';
import Component404 from 'src/components/Component404';

export default function App(): JSX.Element {
  const router = useRouter();
  const { index } = router.query;

  if (index?.[0] === 'home') {
    return <Home />;
  } else if (index?.[0] === 'member' && index?.[1] === 'new') {
    return <MemberNew />;
  } else {
    return <Component404 />;
  }
}

App.props = {
  layout: 'main',
};
