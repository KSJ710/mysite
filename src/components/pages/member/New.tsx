import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function New(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  function changeName(e) {
    setName(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changePassword(e) {
    setPassword(e.target.value);
  }
  async function createMember({ name, email, password }) {
    try {
      const response = await axios.post('/api/member/create', { name: name, email: email, password: password });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" value={name} name="name" className="border-2" onChange={changeName} />
        </label>
        <label htmlFor="email">
          email:
          <input type="text" value={email} className="border-2" onChange={changeEmail} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" value={password} name="password" className="border-2" onChange={changePassword} />
        </label>
        <input
          type="submit"
          value="Submit"
          className="px-4 mt-2 bg-cyan-300 rounded-full "
          onClick={() => createMember({ name: name, email: email, password: password })}
        />
      </form>
      {router.query.result === 'error' ? <div>エラーです。</div> : null}
    </>
  );
}
