import { atom } from 'recoil';

export const currentTargetState = atom<HTMLElement>({
  key: 'currentTrgetState',
  default: null,
});

export const editToolsDisplayState = atom<classDisplay>({
  key: 'editToolsDisplayState',
  default: 'none',
});

export const currentLayoutPart = atom<string>({
  key: 'currentLayoutPart',
  default: 'Head',
});

export const tplHeadNumberState = atom<number>({
  key: 'tplHeadNumberState',
  default: 1,
});

export const tplMainNumberState = atom<number>({
  key: 'tplMainNumberState',
  default: 1,
});

export const tplFootNumberState = atom<number>({
  key: 'tplFooterNumberState',
  default: 1,
});
