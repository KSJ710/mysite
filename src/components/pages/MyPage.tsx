import React from 'react';
import { useRecoilValue } from 'recoil';
// atom
import axios from 'axios';
import { useRouter } from 'next/router';

export default function MyPage(): JSX.Element {
  const router = useRouter();

  async function createMember(name, email, password) {
    try {
      const response = await axios.post('/api/member/create', {
        name: name,
        email: email,
        password: password,
      });
      console.log(response);
      router.push('/mypage', undefined, { shallow: true });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-cyan-100">
      <h1></h1>
      <div className="h-8 bg-red-300">{name}</div>
      <div>{emailRequired}</div>
      <div>{passwordRequired}</div>
      <button
        type="submit"
        onClick={() => createMember(name, emailRequired, passwordRequired)}
      >
        送信
      </button>
    </div>
  );
}
