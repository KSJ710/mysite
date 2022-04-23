import { useSession } from 'next-auth/react';
import Load from 'src/components/common/Load';
import useSWR from 'swr';
import axios from 'axios';

export default function MyPage(): JSX.Element {
  const { data: session } = useSession({ required: true });
  const { data: member, error } = useSWR(`/api/member/show?email=${session.user.email}`, fetcher);

  if (!member) return <Load />;

  return (
    <div className="bg-cyan-100">
      <h1>ユーザー情報</h1>
      <div className="h-8 bg-red-300"></div>
      <div>{member?.name}</div>
      <div>{member?.email}</div>
    </div>
  );
}

// useSWRが受け取る関数でapiルートURLが渡される
async function fetcher(url) {
  const res = await axios.get(url);
  return res.data;
}
