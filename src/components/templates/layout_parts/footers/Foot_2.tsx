/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext } from 'react';
// context
import { ToggleEditTools } from 'src/pages/templates/template';
// image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../svg/Logo_1';
// CSS
import styles from './Foot_2.module.scss';

const Footer_2 = (): JSX.Element => {
  const hTET: (event) => void = useContext(ToggleEditTools);
  return (
    <nav className={`${styles.base} _track_lay_part_Foot`} onClick={hTET}>
      <div className={styles.register}>
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <input className="w-full" type="text" placeholder="Email address" />
        <input type="submit" value="メルマガ登録" />
      </div>
      <div className={styles.site_info}>
        <ul>
          <li>CONTACT</li>
          <li>FAQ</li>
          <li>
            <div className="hidden md:block">
              <FontAwesomeIcon icon={['fab', 'spotify']} />
            </div>
          </li>
        </ul>
        <ul>
          <li>利用規約</li>
          <li>プライバシーポリシー</li>
          <li>特定商取引法に基づく表記</li>
          <li>© 2021 Mysite All Rights Reserved.</li>
        </ul>
      </div>
      <div className={styles.logo}>
        <Logo height="72px" width="72px" />
        <p>ロゴロゴ</p>
      </div>
      <p className={styles.copy_right}>© 2021 Mysite All Rights Reserved.</p>
    </nav>
  );
};

export default Footer_2;
