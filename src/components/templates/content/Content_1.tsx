import React, { useEffect } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Content_1.module.scss';

export default function Content_1(): JSX.Element {
  useSetHeight();

  return (
    <div className={styles.slide_container}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoHeight={true}
        slidesPerView="auto"
        loop={true}
      >
        <SwiperSlide>
          <div className={`${styles.slide} _track_content_1`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.slide} _track_content_1`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.slide} _track_content_1`}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.slide} _track_content_1`}></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function useSetHeight() {
  // contentの高さをheaderの高さ分引いて設定
  useEffect(() => {
    const header_height: number =
      document.getElementsByTagName('header')[0].offsetHeight;
    let content_height: string = window.innerHeight - header_height + 'px';
    /* getElementsByClassNameはHTMLCollectionOf<Element>を返し、
       Elementはstyleを持たないので型変換 */
    const contentList = document.getElementsByClassName(
      '_track_content_1'
    ) as HTMLCollectionOf<HTMLElement>;
    console.log(contentList.length);
    for (let step = 0; step < contentList.length; step++) {
      contentList[step].style.height = content_height;
    }
  });
}
