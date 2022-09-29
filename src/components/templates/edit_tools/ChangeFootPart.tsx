import { useSetRecoilState } from 'recoil';
import { useFoot } from 'src/helper/custom_hook/m_foot';
// atom
import { tplFootNumberState } from 'src/atoms/tamplate_atoms';
// css
import styles from './ChangeFootPart.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

export default function ChangefootPart(props: Props): JSX.Element {
  //背景カラーエディタを非表示にする
  const hiddenfootPart = () => {
    props.setDisplay('none');
  };

  return (
    <div style={{ display: props.display }} className={styles.base} onClick={hiddenfootPart}>
      <ul className={styles.tool_bg}>
        <FetchFoot {...props} />
      </ul>
    </div>
  );
}

function FetchFoot(props) {
  const setFootNum = useSetRecoilState(tplFootNumberState);
  //Head部分のパーツを切り替える
  const changeFootPart = (e) => {
    e.stopPropagation();
    setFootNum(e.target.value);
  };

  const { foots, isLoading, isError } = useFoot();
  if (isError) return <div style={{ display: props.display }}>error</div>;
  if (isLoading) return <div style={{ display: props.display }}>loading...</div>;

  return foots.map((footPart: LayoutParts) => (
    <li key={footPart.id} className={styles.tool_list}>
      <button value={footPart.id} onClick={changeFootPart}></button>
      <div className={styles.label}>{footPart.id}</div>
      {footPart.name}
    </li>
  ));
}
