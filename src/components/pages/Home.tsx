import Link from 'next/link';
import styles from './Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <div className={styles.base}>
      <section className={`${styles.guidAccount} mb-[40px]`}>
        <h2 className="mb-[40px]">見出し</h2>
        <Link href="/templates">
          <a>開始</a>
        </Link>
      </section>

      <section className={styles.sampleList}>
        <h2 className="mb-[30px]">使い方</h2>
        <div>aaa</div>
      </section>
    </div>
  );
}
