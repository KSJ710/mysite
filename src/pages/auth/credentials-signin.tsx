import { useState } from 'react';
import { useRouter } from 'next/router';
import { getCsrfToken } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
// コンポーネント
import LoginError from 'src/components/common/Flash';
// css
import styles from './CredentialsSignin.module.scss';

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
        <span>メールアドレス</span>
        <input name="email" type="text" autoComplete="username" />
      </label>
      <label>
        <span>パスワード</span>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
        />
      </label>
      <input type="submit" value="ログイン" />
      {error && (
        <LoginError
          backgroundColor={'#c71b00'}
          text={'メールアドレス又はパスワードが間違っています。'}
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
