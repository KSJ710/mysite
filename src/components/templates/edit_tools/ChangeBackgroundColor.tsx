import { useRecoilValue } from 'recoil';
import { useColor } from 'src/helper/custom_hook/m_color';
// atom
import { currentTargetState } from 'src/atoms/tamplate_atoms';
// css
import styles from './ChangeBackgroundColor.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

export default function ChangeBackgroundColor(props: Props): JSX.Element {
  function hiddenBgColor(e) {
    e.stopPropagation();
    props.setDisplay('none');
  }

  return (
    <div style={{ display: props.display }} className={styles.base} onClick={hiddenBgColor}>
      <ul className={styles.tool_bg}>
        <FetchColor {...props} />
      </ul>
    </div>
  );
}

// カラーデータフェッチして一覧に表示
function FetchColor(props) {
  const currentTarget = useRecoilValue(currentTargetState);
  // 設定されているエレメントの背景カラーを変える
  const changeBgColer = (e) => {
    e.stopPropagation();
    currentTarget.style.backgroundColor = e.target.value;
  };

  const { colors, isLoading, isError } = useColor();
  if (isError) return <div style={{ display: props.display }}>error</div>;
  if (isLoading) return <div style={{ display: props.display }}>loading...</div>;

  const colorList = colors.map((color: Color) => (
    <li
      style={{
        backgroundColor: color.colorCode,
        color: specifiedColorNameColor(color.id),
      }}
      key={color.id}
      className={styles.tool_list}
    >
      <button value={color.colorCode} onClick={changeBgColer}></button>
      <div className={styles.label}>{color.id}</div>
      {color.name}
      <br />
      {color.kanaName}
    </li>
  ));
  return colorList;
}

// 背景の明度で文字が見えにくいので文字色を制御
function specifiedColorNameColor(colorID) {
  if (colorID >= 228) {
    return '#ffffff';
  } else {
    return '#000000';
  }
}
