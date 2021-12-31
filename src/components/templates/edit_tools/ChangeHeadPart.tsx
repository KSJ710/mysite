/* eslint-disable tailwindcss/no-custom-classname */
import { useSetRecoilState } from 'recoil';
import { tplHeadNumberState } from 'src/states/atoms/tamplate_atoms';
import useSWR from 'swr';
import axios from 'axios';
import styles from './ChangeHeadPart.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

const ChangeHeadPart = (props: Props): JSX.Element => {
  const setHeadNum = useSetRecoilState(tplHeadNumberState);

  //Head部分のパーツを切り替える
  const handleChangeHeadPart = (e) => {
    e.stopPropagation();
    setHeadNum(e.target.value);
  };

  //背景カラーエディタを非表示にする
  const handleHiddenHeadPart = () => {
    props.setDisplay('none');
  };

  // カラーデータフェッチして一覧に表示
  const { data, error } = useSWR('/api/head_parts', fetcher);
  if (error) {
    return <div>error</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  } else {
    const headPartList = data.map((headPart: HeadParts) => (
      <li key={headPart.id} className={styles.tool_list}>
        <button value={headPart.id} onClick={handleChangeHeadPart}></button>
        <div className={styles.label}>{headPart.id}</div>
      </li>
    ));
    return (
      <div
        style={{ display: props.display }}
        className={styles.base}
        onClick={handleHiddenHeadPart}
      >
        <ul className={styles.tool_bg}>{headPartList}</ul>
      </div>
    );
  }
};

// useSWRが受け取る関数でapiルートURLが渡される
const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default ChangeHeadPart;
