import { useRouter } from 'next/router';
import MyPage from 'src/components/pages/MyPage';
import Component404 from 'src/components/Component404';

export default function Index(): JSX.Element {
  const { index } = useRouter().query;

  if (index?.[0] === 'mypage') {
    return <MyPage />;
  } else {
    return <Component404 />;
  }
}

Index.props = {
  auth: true,
  layout: 'main',
};
