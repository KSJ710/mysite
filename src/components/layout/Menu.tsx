/* eslint-disable tailwindcss/no-custom-classname */
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
// component
import List from 'src/components/common/List';
// css
import styles from './Menu.module.scss';

const Head = (props): JSX.Element => {
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
    loginState = 'yellow';
  } else if (status === 'authenticated') {
    loginState = 'green';
  } else {
    loginState = 'white';
  }

  let list = [];
  if (status === 'authenticated') {
    list = [
      {
        value: 'ホーム',
        href: '/home',
        shallow: true,
        event: props.handleTglDisp,
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
        href: '/mypage',
        shallow: true,
        event: props.handleTglDisp,
      },
    ];
  } else {
    list = [
      {
        value: 'ホーム',
        href: '/home',
        shallow: true,
        event: props.handleTglDisp,
      },
      {
        value: 'ログイン',
        href: '/auth/credentials-signin',
        shallow: false,
        event: props.handleTglDisp,
      },
      {
        value: 'アカウント作成',
        href: '/member/new',
        shallow: true,
        event: props.handleTglDisp,
      },
    ];
  }

  return (
    <div className={styles.base}>
      <ul style={{ display: toggleDisplay }}>
        <List value={list} />
      </ul>
      <button
        className="fixed right-8 bottom-8 w-16 h-16 rounded-full border-2 border-slate-900"
        style={{ backgroundColor: loginState }}
        onClick={handleTglDisp}
      ></button>
    </div>
  );
};

export default Head;
