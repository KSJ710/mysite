/* eslint-disable tailwindcss/no-custom-classname */
import { useSetRecoilState } from 'recoil';
import { useHead } from 'src/helper/custom_hook/m_head';
// atom
import { tplHeadNumberState } from 'src/atoms/tamplate_atoms';
// css
import styles from './ChangeHeadPart.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

export default function ChangeHeadPart(props: Props): JSX.Element {
  //背景カラーエディタを非表示にする
  const hiddenHeadPart = () => {
    props.setDisplay('none');
  };

  return (
    <div style={{ display: props.display }} className={styles.base} onClick={hiddenHeadPart}>
      <ul className={styles.tool_bg}>
        <FetchHead {...props} />
      </ul>
    </div>
  );
}

function FetchHead(props) {
  const setHeadNum = useSetRecoilState(tplHeadNumberState);

  //Head部分のパーツを切り替える
  const changeHeadPart = (e) => {
    e.stopPropagation();
    setHeadNum(e.target.value);
  };

  const { heads, isLoading, isError } = useHead();
  if (isError) return <div style={{ display: props.display }}>error</div>;
  if (isLoading) return <div style={{ display: props.display }}>loading...</div>;

  return heads.map((headPart: LayoutParts) => (
    <li key={headPart.id} className={styles.tool_list}>
      <button value={headPart.id} onClick={changeHeadPart}></button>
      <div className={styles.label}>{headPart.id}</div>
      {headPart.name}
    </li>
  ));
}
