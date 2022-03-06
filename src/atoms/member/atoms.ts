import { atom } from 'recoil';

export const newMemberFormNameState = atom<string>({
  key: 'newMemberFormNameState',
  default: '',
});
export const newMemberFormEmailState = atom<string>({
  key: 'newMemberFormEmailState',
  default: '',
});
export const newMemberFormPasswordState = atom<string>({
  key: 'newMemberFormPasswordState',
  default: '',
});
export const newMemberFormConfirmPasswordState = atom<string>({
  key: 'newMemberFormConfirmPasswordState',
  default: '',
});