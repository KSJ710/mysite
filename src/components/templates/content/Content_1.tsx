import React, { useEffect } from 'react';
import styles from './Content_1.module.scss';

const Content_1 = (): JSX.Element => {
  // contentの高さをheaderの高さ分引いて設定
  useEffect(() => {
    const header_height = document.getElementsByTagName('header')[0].offsetHeight;
    let content_height = window.screen.height - header_height;
    /* getElementsByClassNameはHTMLCollectionOf<Element>を返し、
       Elementはstyleを持たないので型変換 */
    const contentList = document.getElementsByClassName(
      '_track_content_1'
    ) as HTMLCollectionOf<HTMLElement>;
    contentList[0].style.height = content_height + 'px';
  });

  return <div className={`${styles.base} _track_content_1`}></div>;
};

export default Content_1;
