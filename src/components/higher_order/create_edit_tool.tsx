import { useRecoilValue } from 'recoil';
// atom
import { currentTargetState } from 'src/atoms/tamplate_atoms';
// css
import styles from './ChangeFontFamily.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
  fetchData: () => JSX.Element;
};

export default function ChangeFontFamily(props: Props): JSX.Element {
  const hiddenFontFamily = (e) => {
    e.stopPropagation();
    props.setDisplay('none');
  };

  return (
    <div style={{ display: props.display }} className={styles.base} onClick={hiddenFontFamily}>
      <ul className={styles.tool_bg}>
        <FetchFontFamily {...props} />
      </ul>
    </div>
  );
}

function FetchFontFamily(props): JSX.Element {
  const currentTarget = useRecoilValue(currentTargetState);

  const changeFontFamily = (e) => {
    e.stopPropagation();
    currentTarget.style.fontFamily = e.target.value;
  };

  const { data, isLoading, isError } = props.fetchData();
  if (isError) return <div style={{ display: props.display }}>error</div>;
  if (isLoading) return <div style={{ display: props.display }}>loading...</div>;

  return data.map((editTool: Color | Prefecture | City | FontFamily | LayoutParts) => (
    <li style={{ fontFamily: editTool.style }} key={editTool.id} className={styles.tool_list}>
      <button value={editTool.style} onClick={changeeditTool}></button>
      <div className={styles.label}>{editTool.id}</div>
      {editTool.name}
    </li>
  ));
}
