import { useRouter } from 'next/router';
import { getCsrfToken } from 'next-auth/react';

export default function SignIn({ csrfToken }) {
  const { error } = useRouter().query;
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" value={csrfToken} />
      <label>
        Email
        <input name="email" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
      {error && <div>ログインID又はパスワードが間違っています。</div>}
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
