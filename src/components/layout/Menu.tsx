/* eslint-disable tailwindcss/no-custom-classname */
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
// component
import List from 'src/components/common/List';
// css
import styles from './Menu.module.scss';

export default function Menu(): JSX.Element {
  const { status } = useSession();
  const [toggleDisplay, setToggleDisplay] = useState<classDisplay>('none');

  // Menuの表示非表示を切り替える
  const handleTglDisp = () => {
    toggleDisplay == 'none'
      ? setToggleDisplay('flex')
      : setToggleDisplay('none');
  };

  let loginState = '';
  if (status === 'loading') {
    loginState = '#e6b422';
  } else if (status === 'authenticated') {
    loginState = '#069419';
  } else {
    loginState = '#f7fcfe';
  }

  let list = [];
  if (status === 'authenticated') {
    list = [
      {
        value: 'ホーム',
        href: '/home',
        shallow: true,
        event: handleTglDisp,
      },
      {
        value: 'ログアウト',
        href: '/credentials-signout',
        shallow: false,
        event: () =>
          signOut({
            callbackUrl: 'http://localhost:3000/auth/credentials-signin',
          }),
      },
      {
        value: 'マイページ',
        href: '/auth/mypage',
        shallow: true,
        event: handleTglDisp,
      },
    ];
  } else {
    list = [
      {
        value: 'ホーム',
        href: '/home',
        shallow: true,
        event: handleTglDisp,
      },
      {
        value: 'ログイン',
        href: '/auth/credentials-signin',
        shallow: false,
        event: handleTglDisp,
      },
      {
        value: 'アカウント作成',
        href: '/member/new',
        shallow: true,
        event: handleTglDisp,
      },
    ];
  }

  return (
    <div className={styles.base}>
      <ul style={{ display: toggleDisplay }}>
        <List value={list} />
      </ul>
      <button
        style={{ backgroundColor: loginState }}
        onClick={handleTglDisp}
      ></button>
    </div>
  );
}
