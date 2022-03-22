import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Load.module.scss';

export default function Load(): JSX.Element {
  const [boxWidthState, sestBoxWidthState] = useState(0);
  const [boxHeightState, sestBoxHeightState] = useState(0);
  const countSplitDisplay = 25;
  const qtyBox = countSplitDisplay * countSplitDisplay;
  const controls = useAnimation();
  const BoxsProps = {
    qtyBox,
    countSplitDisplay,
    controls,
    boxWidthState,
    boxHeightState,
  };

  useEffectBoxAnimation({
    controls,
    countSplitDisplay,
    sestBoxWidthState,
    sestBoxHeightState,
  });

  return <div className={styles.base}>{mapBoxs({ ...BoxsProps })}</div>;
}

function useEffectBoxAnimation({
  controls,
  countSplitDisplay,
  sestBoxWidthState,
  sestBoxHeightState,
}) {
  useEffect(() => {
    const boxWidth = document.body.clientWidth / countSplitDisplay;
    const boxHeight = document.documentElement.clientHeight / countSplitDisplay;
    sestBoxWidthState(boxWidth);
    sestBoxHeightState(boxHeight);
    console.log(boxWidth);
    console.log(boxHeight);

    controls.start((i) => ({
      y: [0, 30],
      border: ['0px solid #007b43', '1px solid #007b43', '0px solid #007b43'],
      opacity: [1, 0],
      transition: {
        type: 'Tween',
        stiffness: 100,
        duration: 5,
        ease: 'easeInOut',
        delay: 5 * Math.random(),
      },
    }));
  });
}

function mapBoxs({
  qtyBox,
  countSplitDisplay,
  controls,
  boxWidthState,
  boxHeightState,
}) {
  return [...Array(qtyBox)].map((v, i) => (
    <motion.div
      key={i}
      style={{
        width: boxWidthState,
        height: boxHeightState,
        top: boxHeightState * Math.floor(i / countSplitDisplay),
        left:
          boxWidthState *
          (i - countSplitDisplay * Math.floor(i / countSplitDisplay)),
      }}
      animate={controls}
      custom={i}
    />
  ));
}
