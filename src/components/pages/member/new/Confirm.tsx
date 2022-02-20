import React from 'react';
import { useRecoilValue } from 'recoil';
import { SubmitHandler, useForm } from 'react-hook-form';
// atom
import { newMemberFormState } from 'src/atoms/member/atoms';
import axios from 'axios';

type Inputs = {
  name: string;
  emailRequired: string;
  passwordRequired: string;
};

export default function Confirm(): JSX.Element {
  const newMemberForm = useRecoilValue(newMemberFormState);
  console.log(newMemberForm);

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
    <div className="bg-cyan-100">
      <div>{newMemberForm.name}</div>
      <div>{newMemberForm.emailRequired}</div>
      <div>{newMemberForm.passwordRequired}</div>
    </div>
  );
}
