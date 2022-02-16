import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import Head from 'src/components/layout/Head';
import Foot from 'src/components/layout/Foot';
import Menu from 'src/components/layout/Menu';
import MenuButton from 'src/components/layout/MenuButton';
import styles from './Base.module.scss';

const Base = (props): JSX.Element => {
  const [toggleDisplay, setToggleDisplay] = useState<classDisplay>('none');
  // Menuの表示非表示を切り替える
  const handleTglDisp = () => {
    toggleDisplay == 'none' ? setToggleDisplay('flex') : setToggleDisplay('none');
  };

  return (
    <div className={styles.base}>
      <header>
        <Head />
      </header>
      <main>{props.children}</main>
      <footer>
        <Foot />
      </footer>
      <div className="w-screen h-screen" style={{ display: toggleDisplay }}>
        <Menu handleTglDisp={handleTglDisp} />
      </div>
      <div onClick={handleTglDisp}>
        <MenuButton />
      </div>
    </div>
  );
};

export default Base;
