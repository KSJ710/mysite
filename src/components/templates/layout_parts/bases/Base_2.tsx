import Head from 'src/components/templates/layout/Head';
import styles from './Base_1.module.scss';

const Base_2 = (props): JSX.Element => {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <Head />
      </header>
      <main className={styles.main} onClick={props.toggleEditTools}></main>
      <aside className={styles.sidebar} onClick={props.toggleEditTools}></aside>
      <footer
        className={styles.footer}
        onClick={props.toggleEditTools}
      ></footer>
    </div>
  );
};

export default Base_2;
