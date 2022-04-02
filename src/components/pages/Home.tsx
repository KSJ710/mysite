import { useSampleList } from 'src/helper/custom_hook/sample_list';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.scss';

export default function Home(): JSX.Element {
  const sampleListElement = useSampleListElement();

  return (
    <div className={styles.base}>
      <h1 className="mb-[40px]">
        <b>React</b>で作成された
        <br />
        シングルサイトアプリケーションです
      </h1>
      <section className={`${styles.guidAccount} mb-[40px]`}>
        <h2>ご案内</h2>
        <p>アカウントを作成するとアプリの詳細を確認することができます。</p>
        <button className=" mb-[30px]">アカウント作成</button>
        <p>
          アカウント登録しなくても既存アカウントで ログインする事が可能です。
        </p>
        <button>ログイン</button>
      </section>

      <section className={styles.sampleList}>
        <h2 className="mb-[30px]">サンプルリスト</h2>
        <ul className="flex flex-wrap">{sampleListElement}</ul>
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
