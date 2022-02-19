import { useRecoilValue } from 'recoil';
import { tplHeadNumberState } from 'src/atoms/tamplate_atoms';
import * as HeadBulk from 'src/components/templates/layout_parts/headers/index';
import styles from './Head.module.scss';

const Head = (): JSX.Element => {
  const curtTplHeadNum = useRecoilValue(tplHeadNumberState);

  let tplHeadNum = 1;
  // keyはコンポーネント名
  for (let key in HeadBulk) {
    if (HeadBulk.hasOwnProperty(key)) {
      if (tplHeadNum == curtTplHeadNum) {
        const Head = HeadBulk[key];
        return <Head />;
      }
      tplHeadNum++;
    }
  }
};

export default Head;
