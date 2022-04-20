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
  const toggleDisp = () => {
    toggleDisplay == 'none' ? setToggleDisplay('flex') : setToggleDisplay('none');
  };

  return (
    <div className={styles.base}>
      <ul style={{ display: toggleDisplay }}>
        <MenuList toggleDisp={toggleDisp} status={status} />
      </ul>
      <MenuButton toggleDisp={toggleDisp} status={status} />
    </div>
  );
}

function MenuList(props) {
  const { toggleDisp, status } = props;
  let list = [];
  if (status === 'authenticated') {
    list = [
      {
        value: 'ホーム',
        href: '/home',
        shallow: true,
        event: toggleDisp,
      },
      {
        value: 'ログアウト',
        href: '/credentials-signout',
        shallow: false,
        event: () =>
          signOut({
            callbackUrl: '/auth/credentials-signin',
          }),
      },
      {
        value: 'マイページ',
        href: '/auth/mypage',
        shallow: true,
        event: toggleDisp,
      },
    ];
  } else {
    list = [
      {
        value: 'ホーム',
        href: '/home',
        shallow: true,
        event: toggleDisp,
      },
      {
        value: 'ログイン',
        href: '/auth/credentials-signin',
        shallow: false,
        event: toggleDisp,
      },
      {
        value: 'アカウント作成',
        href: '/member/new',
        shallow: true,
        event: toggleDisp,
      },
    ];
  }
  return <List value={list} />;
}

function MenuButton(props) {
  const { toggleDisp, status } = props;
  let loginState = '';
  if (status === 'loading') {
    loginState = '#e6b422';
  } else if (status === 'authenticated') {
    loginState = '#069419';
  } else {
    loginState = '#f7fcfe';
  }
  return <button style={{ backgroundColor: loginState }} onClick={toggleDisp}></button>;
}
