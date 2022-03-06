import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styles from './FlashInvalid.module.scss';

export default function FlashInvalid(props): JSX.Element {
  return <span className={styles.base}>{props.text}</span>;
}
