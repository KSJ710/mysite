import React from 'react';
import { useRecoilState } from 'recoil';
import { SubmitHandler, useForm } from 'react-hook-form';
// atom
import { newMemberFormState } from 'src/atoms/member/atoms';
import axios from 'axios';
import next from 'next';
import { useRouter } from 'next/router';

type Inputs = {
  name: string;
  emailRequired: string;
  passwordRequired: string;
};

export default function Inputs(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const [NewMemberForm, setNewMemberForm] = useRecoilState(newMemberFormState);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setNewMemberForm(data);
    router.push('/member/new?step=confirm');
  };

  async function createMember({ name, email, password }) {
    try {
      const response = await axios.post('/api/member/create', {
        name: name,
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name:
          <input defaultValue={NewMemberForm.name} className="border-2" {...register('name')} />
        </label>
        <label htmlFor="email">
          email:
          <input
            defaultValue={NewMemberForm.emailRequired}
            className="border-2"
            {...register('emailRequired', { required: true })}
          />
        </label>
        {errors.emailRequired && <span>必須項目です</span>}
        <label htmlFor="password">
          Password:
          <input
            className="border-2"
            defaultValue={NewMemberForm.passwordRequired}
            {...register('passwordRequired', { required: true })}
          />
        </label>
        {errors.passwordRequired && <span>必須項目です</span>}
        <input type="submit" value={'確認'} className="px-4 mt-2 bg-cyan-300 rounded-full" />
        {errors.passwordRequired && <span>必須項目です</span>}
      </form>
    </>
  );
}
