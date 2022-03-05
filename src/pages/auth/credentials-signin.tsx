import { useRouter } from 'next/router';
import { getCsrfToken } from 'next-auth/react';
import LoginError from 'src/components/common/Flash';
import styles from './CredentialsSignin.module.scss';
import { useState } from 'react';

export default function SignIn({ csrfToken }) {
  const { error } = useRouter().query;

  return (
    <form
      method="post"
      action="/api/auth/callback/credentials"
      className={styles.base}
    >
      <input name="csrfToken" type="hidden" value={csrfToken} />
      <label>
        Email
        <input name="email" type="text" autoComplete="username" />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          autoComplete="current-password"
        />
      </label>
      <input type="submit" value="ログイン" />
      {error && (
        <LoginError
          backgroundColor={'#00c76c'}
          text={'ログインID又はパスワードが間違っています。'}
        />
      )}
    </form>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

SignIn.props = {
  layout: 'main',
};
