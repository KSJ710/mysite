/* eslint-disable tailwindcss/no-custom-classname */
import { useRecoilValue } from 'recoil';
import { useFont } from 'src/helper/custom_hook/m_font';
// atom
import { currentTargetState } from 'src/atoms/tamplate_atoms';
// css
import styles from './ChangeFontFamily.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
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

  const { fonts, isLoading, isError } = useFont();
  if (isError) return <div style={{ display: props.display }}>error</div>;
  if (isLoading) return <div style={{ display: props.display }}>loading...</div>;

  return fonts.map((fontFamily: FontFamily) => (
    <li style={{ fontFamily: fontFamily.style }} key={fontFamily.id} className={styles.tool_list}>
      <button value={fontFamily.style} onClick={changeFontFamily}></button>
      <div className={styles.label}>{fontFamily.id}</div>
      {fontFamily.name}
    </li>
  ));
}
