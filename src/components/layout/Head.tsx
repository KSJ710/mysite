import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  return (
    <div className={styles.base}>
      <div>サンプルサイト</div>
      <div>ログイン</div>
    </div>
  );
};

export default Head;
