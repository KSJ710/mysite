/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentLayoutPart, editToolsDisplayState } from 'src/states/atoms/tamplate_atoms';
import ChangeBackgroundColor from 'src/components/templates/edit_tools/ChangeBackgroundColor';
import ChangeFontFamily from 'src/components/templates/edit_tools/ChangeFontFamily';
import ChangeHeadPart from 'src/components/templates/edit_tools/ChangeHeadPart';
import ChangeFootPart from 'src/components/templates/edit_tools/ChangeFootPart';
import styles from './EditTools.module.scss';

const EditToolBox = (): JSX.Element => {
  const [editToolDisplay, setEditToolDisplay] = useRecoilState(editToolsDisplayState);
  const [bgColorDisplay, setBgColorDisplay] = useState<classDisplay>('none');
  const [fontFamilyDisplay, setFontFamilyDisplay] = useState<classDisplay>('none');
  const [headPartDisplay, setHeadPartDisplay] = useState<classDisplay>('none');
  const [footPartDisplay, setFootPartDisplay] = useState<classDisplay>('none');
  const curtLayPart = useRecoilValue(currentLayoutPart);

  const hiddenEditTools = (e) => {
    e.stopPropagation();
    setBgColorDisplay('none');
    setEditToolDisplay('none');
  };

  const showBgColor = (e) => {
    e.stopPropagation();
    setBgColorDisplay('flex');
    setEditToolDisplay('none');
  };

  const showFontFamily = (e) => {
    e.stopPropagation();
    setFontFamilyDisplay('flex');
    setEditToolDisplay('none');
  };

  // 動的に変数名が決定されれる
  const showHeadPart = (e) => {
    e.stopPropagation();
    setHeadPartDisplay('flex');
    setEditToolDisplay('none');
  };

  // 動的に変数名が決定されれる
  const showFootPart = (e) => {
    e.stopPropagation();
    setFootPartDisplay('flex');
    setEditToolDisplay('none');
  };

  return (
    <>
      <div style={{ display: editToolDisplay }} className={styles.base} onClick={hiddenEditTools}>
        <div>
          <p>変更したい項目を選んで下さい</p>
          <ul>
            <li onClick={showBgColor}>背景カラー</li>
            <li onClick={showFontFamily}>文字フォントを変える</li>
            <li onClick={eval(`show${curtLayPart}Part`)}>コンポーネント変更する</li>
            <li onClick={showBgColor}>テキストテキスト</li>
          </ul>
        </div>
      </div>
      {/* editToolで選択した項目に対して表示がされる */}
      <ChangeBackgroundColor display={bgColorDisplay} setDisplay={setBgColorDisplay} />
      <ChangeFontFamily display={fontFamilyDisplay} setDisplay={setFontFamilyDisplay} />
      <ChangeHeadPart display={headPartDisplay} setDisplay={setHeadPartDisplay} />
      <ChangeFootPart display={footPartDisplay} setDisplay={setFootPartDisplay} />
    </>
  );
};

export default EditToolBox;
