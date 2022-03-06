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
