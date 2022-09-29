import Link from 'next/link';
import styles from './Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <div className={styles.base}>
      <section className={`${styles.guidAccount} mb-[40px]`}>
        <h2 className="mb-[20px]">タイトル</h2>
        <Link href="/templates/template">
          <a className="inline-block py-2 px-4 bg-black rounded-full">テンプレート</a>
        </Link>
      </section>
      <section className={`${styles.guidAccount} mb-[40px]`}>
        <h2 className="mb-[20px]">タイトル</h2>
        <Link href="/sample">
          <a className="inline-block py-2 px-4 bg-black rounded-full">ロードアニメーション</a>
        </Link>
      </section>
    </div>
  );
}
