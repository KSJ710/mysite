/* eslint-disable tailwindcss/no-custom-classname */
import { useSetRecoilState } from 'recoil';
import useSWR from 'swr';
// atom
import { tplHeadNumberState } from 'src/atoms/tamplate_atoms';
// helper
import { fetcher } from 'src/helper/common';
// css
import styles from './ChangeHeadPart.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

const ChangeHeadPart = (props: Props): JSX.Element => {
  const setHeadNum = useSetRecoilState(tplHeadNumberState);

  //Head部分のパーツを切り替える
  const changeHeadPart = (e) => {
    e.stopPropagation();
    setHeadNum(e.target.value);
  };

  //背景カラーエディタを非表示にする
  const hiddenHeadPart = () => {
    props.setDisplay('none');
  };

  const { data, error } = useSWR('/api/templates/head_part', fetcher);
  if (error) {
    return <div>error</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  } else {
    const headPartList = data.map((headPart: LayoutParts) => (
      <li key={headPart.id} className={styles.tool_list}>
        <button value={headPart.id} onClick={changeHeadPart}></button>
        <div className={styles.label}>{headPart.id}</div>
        {headPart.name}
      </li>
    ));
    return (
      <div style={{ display: props.display }} className={styles.base} onClick={hiddenHeadPart}>
        <ul className={styles.tool_bg}>{headPartList}</ul>
      </div>
    );
  }
};

export default ChangeHeadPart;
