import styles from './Exp.module.scss';
import { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { route } from 'next/dist/server/router';
import useSWR from 'swr';
import { fetcher } from 'src/helper/common';

const Exp = (): JSX.Element => {
  const Address = () => {
    const { data, error } = useSWR('https://geolonia.github.io/japanese-addresses/api/ja.json', fetcher);
    if (error) {
      return <div>loading</div>;
    }
    console.log(data);
    return <div>{JSON.stringify(data)}</div>;
  };

  return (
    <div className={styles.grid}>
      <Address />
    </div>
  );
};

export default Exp;
