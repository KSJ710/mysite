import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styles from './Flash.module.scss';

export default function FlashHead(props): JSX.Element {
  const [flashState, setFlashState] = useState('block');
  const { backgroundColor, text } = props;

  return (
    <div
      className={styles.base}
      style={{ display: flashState, backgroundColor: backgroundColor }}
      onClick={() => setFlashState('none')}
    >
      <span>{text}</span>
      <span className={styles.close_button}></span>
    </div>
  );
}
