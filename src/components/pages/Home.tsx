import { useSampleList } from 'src/helper/custom_hook/sample_list';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.scss';

export default function Home(): JSX.Element {

  return (
    <div className={styles.base}>
      <section className={`${styles.guidAccount} mb-[40px]`}>
        <h2 className="mb-[40px]">見出し</h2>
      </section>

      <section className={`${styles.useway} mb-[40px]`}>
        <h2 className="mb-[40px]">見出し</h2>
        <h2 className="mb-[30px]">使い方</h2>
        <div></div>
      </section>

      <section className={`${styles.list} mb-[40px]`}>
        <h2 className="mb-[30px]">使い方</h2>
        <div></div>
      </section>
    </div>
  );
}

function useSampleListElement() {
  const { sampleList, isLoading, isError } = useSampleList();
  if (isError) return <div>読み込み出来ません</div>;
  if (isLoading) return <div>読込中...</div>;

  return sampleList.map((sample) => (
    <li key={sample.id}>
      <Link href={`sample-list/${sample.id}`}>
        <a>
          <div>{sample.title}</div>
          <Image
            src={`/images/home/sample_list/${sample.image_path}`}
            alt="サムネイル"
            width={100}
            height={100}
          />
        </a>
      </Link>
    </li>
  ));
}
