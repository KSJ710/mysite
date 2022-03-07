import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { useSession, getCsrfToken, getSession } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
// atom
import { loginFormState } from 'src/atoms/member/atoms';
// コンポーネント
import FlashLoginError from 'src/components/common/FlashHead';
import FlashInputInvalid from 'src/components/common/FlashInvalid';
// helper
import { failureColor } from 'src/helper/variables';
// css
import styles from './CredentialsSignin.module.scss';
import { useEffect } from 'react';

type Inputs = {
  emailRequired: string;
  passwordRequired: string;
  csrfToken: string;
};

export default function SignIn({ csrfToken }): JSX.Element {
  const router = useRouter();
  const { error } = router.query;

  const [form, setForm] = useRecoilState(loginFormState);

  // react-hoook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  //  submitされた時のイベント
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const params = new URLSearchParams();
    params.append('email', data.emailRequired);
    params.append('password', data.passwordRequired);
    params.append('csrfToken', data.csrfToken);
    await axios.post('/api/auth/callback/credentials', params);
    const session = await getSession();

    if (!session) {
      router.push('/auth/credentials-signin?error=true', undefined, {
        shallow: true,
      });
    } else {
      location.reload();
      router.push('/home?login=true', undefined, {
        shallow: true,
      });
    }
  };

  return (
    <form className={styles.base} onSubmit={handleSubmit(onSubmit)}>
      <input
        name="csrfToken"
        type="hidden"
        defaultValue={csrfToken}
        {...register('csrfToken')}
      />
      <label>
        <span>メールアドレス</span>
        <input
          name="email"
          defaultValue={form.email}
          autoComplete="username"
          onChange={(e) => setForm({ ...form, email: e.currentTarget.value })}
          {...register('emailRequired', { required: true })}
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
          defaultValue={form.password}
          autoComplete="current-password"
          onChange={(e) =>
            setForm({ ...form, password: e.currentTarget.value })
          }
          {...register('passwordRequired', { required: true })}
        />
        {errors.passwordRequired?.type === 'required' && (
          <FlashInputInvalid text="必須項目です" />
        )}
      </label>
      <input type="submit" value="ログイン" />
      {error && (
        <FlashLoginError
          backgroundColor={failureColor}
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
