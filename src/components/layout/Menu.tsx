/* eslint-disable tailwindcss/no-custom-classname */
import { useSession } from 'next-auth/react';
// component
import List from 'src/components/general/List';
// css
import styles from './Menu.module.scss';

const Head = (props): JSX.Element => {
  const { status } = useSession();

  let list = [];
  if (status === 'authenticated') {
    list = [
      { value: 'ホーム', href: '/home', shallow: true, event: props.handleTglDisp },
      { value: 'ログアウト', href: '/api/auth/signout', shallow: false, event: null },
      { value: 'マイページ', href: '/mypage', shallow: true, event: props.handleTglDisp },
    ];
  } else {
    list = [
      { value: 'ホーム', href: '/home', shallow: true, event: props.handleTglDisp },
      { value: 'ログイン', href: '/api/auth/signin', shallow: false, event: null },
      { value: 'アカウント作成', href: '/new/member', shallow: true, event: props.handleTglDisp },
    ];
  }

  return (
    <ul className={styles.base} style={{ display: props.display }}>
      <List value={list} />
    </ul>
  );
};

export default Head;
