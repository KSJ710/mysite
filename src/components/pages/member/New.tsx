import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { SubmitHandler, useForm } from 'react-hook-form';
// atom
import {
  newMemberFormNameState,
  newMemberFormEmailState,
  newMemberFormPasswordState,
} from 'src/atoms/member/atoms';
// その他ライブラリ
import axios from 'axios';

type Inputs = {
  name: string;
  emailRequired: string;
  passwordRequired: string;
};

export default function New(): JSX.Element {
  const [formName, setFormName] = useRecoilState(newMemberFormNameState);
  const [formEmail, setFormEmail] = useRecoilState(newMemberFormEmailState);
  const [formPassword, setformPassword] = useRecoilState(
    newMemberFormPasswordState
  );
  const [flashSendEmail, setFlashSendEmail] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, emailRequired, passwordRequired } = data;
    createMember(name, emailRequired, passwordRequired).then(() => {
      setFlashSendEmail(true);
    });
  };

  return (
    <>
      {flashSendEmail ? <div>メールが送られました</div> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            defaultValue={formName}
            onInput={(e) => setFormName(e.currentTarget.value)}
            {...register('name')}
          />
        </label>
        <label htmlFor="email">
          email:
          {errors.emailRequired && <span>必須項目です</span>}
          <input
            id="email"
            defaultValue={formEmail}
            onInput={(e) => setFormEmail(e.currentTarget.value)}
            {...register('emailRequired', { required: true })}
          />
        </label>
        <label htmlFor="password">
          Password:
          {errors.passwordRequired && <span>必須項目です</span>}
          <input
            id="password"
            defaultValue={formPassword}
            onInput={(e) => setformPassword(e.currentTarget.value)}
            {...register('passwordRequired', { required: true })}
          />
        </label>
        <input
          type="submit"
          value={'メールアドレス確認'}
          className="px-4 mt-2 bg-cyan-300 rounded-full"
        />
      </form>
    </>
  );
}

async function createMember(name, email, password) {
  try {
    const res = await axios.post('/api/member/create', {
      name: name,
      email: email,
      password: password,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
