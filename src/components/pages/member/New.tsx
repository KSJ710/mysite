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
// sass
import styles from './New.module.scss';

type Inputs = {
  nameRequired: string;
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
    const { nameRequired, emailRequired, passwordRequired } = data;
    createMember(nameRequired, emailRequired, passwordRequired).then(() => {
      setFlashSendEmail(true);
    });
  };

  return (
    <div className={styles.base}>
      {flashSendEmail ? <div>メールが送られました</div> : null}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <span>Name</span>
          <input
            id="name"
            defaultValue={formName}
            onInput={(e) => setFormName(e.currentTarget.value)}
            {...register('nameRequired', { required: true })}
          />
          {errors.nameRequired?.type === 'required' && (
            <span>必須項目です</span>
          )}
        </label>

        <label htmlFor="email">
          <span>Email</span>
          <input
            id="email"
            defaultValue={formEmail}
            onInput={(e) => setFormEmail(e.currentTarget.value)}
            {...register('emailRequired', {
              required: true,
              pattern:
                /^^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{1,}$/i,
            })}
          />
          {errors.emailRequired?.type === 'required' && (
            <span>必須項目です</span>
          )}
          {errors.emailRequired?.type === 'pattern' && (
            <span>メールアドレスではありません</span>
          )}
        </label>

        <label htmlFor="password">
          <span>Password</span>
          <input
            id="password"
            defaultValue={formPassword}
            onInput={(e) => setformPassword(e.currentTarget.value)}
            {...register('passwordRequired', {
              required: true,
              pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,24}$/,
            })}
          />
          {errors.passwordRequired?.type === 'required' && (
            <span>必須項目です</span>
          )}
          {errors.passwordRequired?.type === 'pattern' && (
            <span>
              半角英小文字,大文字,数字を1種類以上を含み8文字以上24文字以下にして下さい
            </span>
          )}
        </label>

        <label htmlFor="name">
          <span>Name</span>
          <input
            id="name"
            defaultValue={formName}
            onInput={(e) => setFormName(e.currentTarget.value)}
            {...register('nameRequired', { required: true })}
          />
          {errors.nameRequired?.type === 'required' && (
            <span>必須項目です</span>
          )}
        </label>

        <input
          type="submit"
          value="メールアドレス確認"
          className="rounded-full"
        />
      </form>
    </div>
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
