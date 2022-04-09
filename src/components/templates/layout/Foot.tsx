import { useRecoilValue } from 'recoil';
import { tplFootNumberState } from 'src/atoms/tamplate_atoms';
import * as FooterBulk from 'src/components/templates/layout_parts/footers/index';
import styles from './Footer.module.scss';

const Foot = (): JSX.Element => {
  const curtTplFootNum = useRecoilValue(tplFootNumberState);

  let tplFootNum = 1;
  // keyはコンポーネント名
  for (let key in FooterBulk) {
    if (FooterBulk.hasOwnProperty(key)) {
      if (tplFootNum == curtTplFootNum) {
        const Footer = FooterBulk[key];
        return <Footer />;
      }
      tplFootNum++;
    }
  }
};

export default Foot;
