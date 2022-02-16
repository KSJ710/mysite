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
      { value: 'ホーム', href: '/app/home', shallow: true, event: props.handleTglDisp },
      { value: 'ログアウト', href: '/api/auth/signout', shallow: false, event: props.handleTglDisp },
      { value: 'マイページ', href: '/app/mypage', shallow: true, event: props.handleTglDisp },
    ];
  } else {
    list = [
      { value: 'ホーム', href: '/app/home', shallow: true, event: props.handleTglDisp },
      { value: 'ログイン', href: '/auth/credentials-signin', shallow: false, event: props.handleTglDisp },
      { value: 'アカウント作成', href: '/app/member/new', shallow: true, event: props.handleTglDisp },
    ];
  }

  return (
    <ul className={styles.base} style={{ display: props.display }}>
      <List value={list} />
    </ul>
  );
};

export default Head;
