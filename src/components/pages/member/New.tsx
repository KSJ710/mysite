import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

type Inputs = {
  name: string;
  emailRequired: string;
  passwordRequired: string;
};

export default function New(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('name'));

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
          <input type="text" className="border-2" {...register('name')} />
        </label>
        <label htmlFor="email">
          email:
          <input
            type="text"
            defaultValue="xxx@xxx"
            className="border-2"
            {...register('emailRequired', { required: true })}
          />
        </label>
        {errors.emailRequired && <span>必須項目です</span>}
        <label htmlFor="password">
          Password:
          <input className="border-2" {...(register('passwordRequired'), { required: true })} />
        </label>
        {errors.passwordRequired && <span>必須項目です</span>}
        <input type="submit" className="px-4 mt-2 bg-cyan-300 rounded-full " />
        {errors.passwordRequired && <span>必須項目です</span>}
      </form>
    </>
  );
}
