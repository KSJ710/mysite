import React from 'react';
import { useTemplate } from 'src/helper/custom_hook/template';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Index.module.scss';

export default function Index(): JSX.Element {
  const list = useTemplateElement();

  return <div className={styles.base}>{list}</div>;
}

function useTemplateElement() {
  const { sampleList, isLoading, isError } = useTemplate();
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
