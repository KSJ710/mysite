import { useState } from 'react';
import { useRouter } from 'next/router';
import { getCsrfToken } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
// コンポーネント
import FlashLoginError from 'src/components/common/FlashHead';
import FlashInputInvalid from 'src/components/common/FlashInvalid';
// css
import styles from './CredentialsSignin.module.scss';

type Inputs = {
  emailRequired: string;
  passwordRequired: string;
};

export default function SignIn({ csrfToken }) {
  const { error } = useRouter().query;
  // react-hoook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  //  submitされた時のイベント
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(errors);
  };

  return (
    <form
      method="post"
      action="/api/auth/callback/credentials"
      className={styles.base}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input name="csrfToken" type="hidden" value={csrfToken} />
      <label>
        <span>メールアドレス</span>
        <input
          name="email"
          type="text"
          autoComplete="username"
          {...register('emailRequired', {
            required: true,
            pattern:
              /^^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{1,}$/i,
          })}
        />
        {errors.emailRequired?.type === 'required' && (
          <FlashInputInvalid text="必須項目です" />
        )}
        {errors.emailRequired?.type === 'pattern' && (
          <FlashInputInvalid text="メールアドレスに誤りがあります" />
        )}
      </label>
      <label>
        <span>パスワード</span>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
        />
        {errors.emailRequired?.type === 'required' && (
          <FlashInputInvalid text="必須項目です" />
        )}
      </label>
      <input type="submit" value="ログイン" />
      {error && (
        <FlashLoginError
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
