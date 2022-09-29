/* eslint-disable tailwindcss/no-custom-classname */
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';
import styles from './Slider.module.scss';

export default function Slider(props): JSX.Element {
  useEffect(() => {
    const slideNodes1 = document.getElementById('slider').cloneNode(true);
    const slideNodes2 = document.getElementById('slider').cloneNode(true);
    document.getElementById('base').appendChild(slideNodes1);
    document.getElementById('base').appendChild(slideNodes2);
  });

  return (
    <>
      <div id="base" className={styles.base}>
        <div id="slider" className={styles.slider}>
          {props.children}
        </div>
      </div>
      <div id="prevEl">prev_button</div>
      <div id="nextEl">next_button</div>
    </>
  );
}
