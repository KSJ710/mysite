import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Load.module.scss';

export default function Load(): JSX.Element {
  const [boxWidthState, sestBoxWidthState] = useState(0);
  const [boxHeightState, sestBoxHeightState] = useState(0);
  const countSplitDisplay = 10;
  const qtyBox = countSplitDisplay * countSplitDisplay;
  const boxControls = useAnimation();
  const BoxsProps = {
    qtyBox,
    countSplitDisplay,
    boxControls,
    boxWidthState,
    boxHeightState,
  };

  useEffectBoxAnimation({
    boxControls,
    countSplitDisplay,
    sestBoxWidthState,
    sestBoxHeightState,
  });

  return (
    <div className={styles.base}>
      {mapBoxs({ ...BoxsProps })}
      <motion.span
        className={styles.loadingText}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        loading
      </motion.span>
    </div>
  );
}

// アニメーションセット
function useEffectBoxAnimation({
  boxControls,
  countSplitDisplay,
  sestBoxWidthState,
  sestBoxHeightState,
}) {
  useEffect(() => {
    const boxWidth = document.body.clientWidth / countSplitDisplay;
    const boxHeight = document.documentElement.clientHeight / countSplitDisplay;
    const max = 1;
    const min = -1;
    sestBoxWidthState(boxWidth);
    sestBoxHeightState(boxHeight);

    boxControls.start(() => ({
      y: [0, 0, boxHeight * 2],
      border: ['0px solid #0d0015', '1px solid #0d0015', '1px solid #0d0015'],
      rotate: [0, 0, 180 * (Math.random() * (max - min) + min)],
      opacity: [1, 1, 0],
      transition: {
        type: 'Tween',
        stiffness: 100,
        duration: 3,
        times: [0, 0.2, 1],
        delay: 1 + 2 * Math.random(),
      },
    }));
  });
}

function mapBoxs({
  qtyBox,
  countSplitDisplay,
  boxControls,
  boxWidthState,
  boxHeightState,
}) {
  return [...Array(qtyBox)].map((v, i) => (
    <motion.div
      key={i}
      style={{
        top: boxHeightState * Math.floor(i / countSplitDisplay),
        left:
          boxWidthState *
          (i - countSplitDisplay * Math.floor(i / countSplitDisplay)),
        width: boxWidthState,
        height: boxHeightState,
      }}
      animate={boxControls}
      custom={i}
    />
  ));
}
