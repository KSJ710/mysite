import { atom } from 'recoil';

export const newMemberFormState = atom({
  key: 'newMemberFormState',
  default: { name: '', emailRequired: '', passwordRequired: '' },
});
