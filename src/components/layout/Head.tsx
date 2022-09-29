import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  return (
    <div className={styles.base}>
      <h1>サイト名</h1>
    </div>
  );
};

export default Head;
