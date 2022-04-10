/* eslint-disable tailwindcss/no-custom-classname */
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
// atom
import { currentTargetState } from 'src/atoms/tamplate_atoms';
// helper
import { fetcher } from 'src/helper/common';
// css
import styles from './ChangeFontFamily.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

const ChangeFontFamily = (props: Props): JSX.Element => {
  const currentTarget = useRecoilValue(currentTargetState);

  const hiddenFontFamily = (e) => {
    e.stopPropagation();
    props.setDisplay('none');
  };

  const changeBgColer = (e) => {
    e.stopPropagation();
    currentTarget.style.fontFamily = e.target.value;
  };

  const { data, error } = useSWR('/api/templates/font_family', fetcher);
  if (error) {
    return <div style={{ display: props.display }}>error</div>;
  }

  if (!data) {
    return <div style={{ display: props.display }}>loading...</div>;
  } else {
    const fontFamilyList = data.map((fontFamily: FontFamily) => (
      <li
        style={{ fontFamily: fontFamily.style }}
        key={fontFamily.id}
        className={styles.tool_list}
      >
        <button value={fontFamily.style} onClick={changeBgColer}></button>
        <div className={styles.label}>{fontFamily.id}</div>
        {fontFamily.name}
      </li>
    ));
    return (
      <div
        style={{ display: props.display }}
        className={styles.base}
        onClick={hiddenFontFamily}
      >
        <ul className={styles.tool_bg}>{fontFamilyList}</ul>
      </div>
    );
  }
};

export default ChangeFontFamily;
