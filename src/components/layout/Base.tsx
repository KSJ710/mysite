import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'src/components/layout/Head';
import Foot from 'src/components/layout/Foot';
import Menu from 'src/components/layout/Menu';
import styles from './Base.module.scss';

const Base = (props): JSX.Element => {
  return (
    <div className={styles.base}>
      <header>
        <Head />
      </header>
      <main>{props.children}</main>
      <footer>
        <Foot />
      </footer>
      <Menu />
    </div>
  );
};

export default Base;
