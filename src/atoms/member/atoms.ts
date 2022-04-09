import { atom } from 'recoil';

export const newMemberFormState = atom<{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}>({
  key: 'newMemberFormState',
  default: { name: '', email: '', password: '', confirmPassword: '' },
});

export const loginFormState = atom<{
  email: string;
  password: string;
}>({
  key: 'loginFormState',
  default: { email: '', password: '' },
});
