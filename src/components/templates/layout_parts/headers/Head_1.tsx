/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext, useState } from 'react';
import { ToggleEditTools } from 'src/pages/templates/template';
// component
import Menu from 'src/components/templates/menu/Menu';
import SpMenu from 'src/components/templates/menu/SpMenu';
import HambugButton from 'src/components/templates/button/HambugButton';
// image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../svg/Logo_1';
// css
import styles from './Head_1.module.scss';

const Head_1 = (): JSX.Element => {
  const tET: (event) => void = useContext(ToggleEditTools);
  const [toggleDisplay, setToggleDisplay] = useState<classDisplay>('none');

  // SpMenuの表示非表示を切り替える
  const addActiveClass = () => {
    toggleDisplay == 'none' ? setToggleDisplay('flex') : setToggleDisplay('none');
  };

  return (
    <>
      <SpMenu toggleDisplay={toggleDisplay} />
      <nav className={`${styles.base} _track_lay_part_Head`} onClick={tET}>
        <h1 className={`${styles.logo}`}>
          <Logo height="36px" width="36px" />
          <p>ロゴロゴ</p>
        </h1>
        <Menu />
        <FontAwesomeIcon className="hidden md:block" icon="user-circle" size="3x" />
        <HambugButton onClick={addActiveClass} />
      </nav>
    </>
  );
};

export default Head_1;
