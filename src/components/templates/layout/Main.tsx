import { useRecoilValue } from 'recoil';
import { tplMainNumberState } from 'src/atoms/tamplate_atoms';
import * as MainBulk from 'src/components/templates/layout_parts/main/index';
import styles from './Main.module.scss';

const Head = (): JSX.Element => {
  const curtTplMainNum = useRecoilValue(tplMainNumberState);

  let tplHeadNum = 1;
  for (let key in MainBulk) {
    if (MainBulk.hasOwnProperty(key)) {
      if (tplHeadNum == curtTplMainNum) {
        const Main = MainBulk[key];
        return <Main className="w-full" />;
      }
      tplHeadNum++;
    }
  }
};

export default Head;
