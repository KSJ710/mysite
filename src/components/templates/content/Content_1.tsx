import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import styles from './Content_1.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Content_1(): JSX.Element {
  useSetHeight();

  return (
    <div className={styles.slide_container}>
      <Swiper
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
        modules={[Navigation, Pagination]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onInit={() => {
          swiperAnim();
        }}
        onSlideChangeTransitionEnd={() => {
          swiperAnim();
        }}
      >
        <SwiperSlide>
          <div className={`${styles.slide} _track_content_1`}></div>
          <p className={styles.slide_text}>aaa</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.slide} _track_content_1`}></div>
          <p className={styles.slide_text}>bbb</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.slide} _track_content_1`}></div>
          <p className={styles.slide_text}>ccc</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function useSetHeight() {
  // contentの高さをheaderの高さ分引いて設定
  useEffect(() => {
    const header_height: number = document.getElementsByTagName('header')[0].offsetHeight;
    let content_height: string = window.innerHeight - header_height + 'px';
    let content_width: string = window.innerWidth + 'px';
    /* getElementsByClassNameはHTMLCollectionOf<Element>を返し、
       Elementはstyleを持たないので型変換 */
    const contentList = document.getElementsByClassName('_track_content_1') as HTMLCollectionOf<HTMLElement>;
    for (let step = 0; step < contentList.length; step++) {
      contentList[step].style.height = content_height;
      contentList[step].style.width = content_width;
    }
  });
}

function swiperAnim() {
  var el = document.querySelector('.swiper-slide-active p');
  var anim = document.querySelectorAll('.' + styles.is_anim);
  console.log(anim[0]);

  for (var i = 0; i < anim.length; i++) {
    anim[i].classList.remove(styles.is_anim);
  }
  el.classList.add(styles.is_anim);
}
