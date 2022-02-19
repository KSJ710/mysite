import { useRouter } from 'next/router';
import Home from 'src/components/pages/Home';
import MemberNew from 'src/components/pages/member/new/Index';
import Component404 from 'src/components/Component404';

export default function App(): JSX.Element {
  const { app } = useRouter().query;

  if (app?.[0] === 'home') {
    return <Home />;
  } else if (app?.[0] === 'member' && app?.[1] === 'new') {
    return <MemberNew />;
  } else {
    return <Component404 />;
  }
}

App.props = {
  layout: 'main',
};
