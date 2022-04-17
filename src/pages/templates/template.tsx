import React from 'react';
import { useSetRecoilState } from 'recoil';
// atom
import {
  currentLayoutPart,
  currentTargetState,
  editToolsDisplayState,
} from 'src/atoms/tamplate_atoms';
import Base from 'src/components/templates/layout/Base';
import EditTools from 'src/components/templates/edit_tools/EditTools';

const Index = (): JSX.Element => {
  const setCurrentTarget = useSetRecoilState(currentTargetState);
  const setCurtLayPart = useSetRecoilState(currentLayoutPart);
  const setEditToolsDisplay = useSetRecoilState(editToolsDisplayState);

  const toggleEditTools = (e) => {
    e.stopPropagation();
    // 編集するelementを設定する
    setCurrentTarget(e.currentTarget);
    const className: string = e.currentTarget.className;

    // レイアウトパーツの種類を配列化
    const layPartNames: string[] = ['Head', 'Foot'];
    // レイアウトパーツを断定するクラス名を検索
    const targetPartName: string = className.match(/_track_lay_part_.*/)[0];
    let resultPartName: string = 'notMatchPart';
    for (let layPartName of layPartNames) {
      // 対象要素がどのパーツか確認、マッチしないなら-1でそれをビット反転し0にし、falseとする
      if (~targetPartName.indexOf(layPartName)) {
        resultPartName = layPartName;
        break;
      }
    }
    setCurtLayPart(resultPartName);

    //editToolの表示する
    setEditToolsDisplay('flex');
  };

  return (
    <ToggleEditTools.Provider value={toggleEditTools}>
      <Base />
      <EditTools />
    </ToggleEditTools.Provider>
  );
};

export const ToggleEditTools = React.createContext(
  {} as (event: React.MouseEvent<HTMLElement>) => void
);
export default Index;
