import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion';

export default function Sam(): JSX.Element {
  return (
    <div>
      <motion.div
        animate={{ scale: [0.1, 0.2, 0.3, 0.8] }}
        className="w-[100px] h-[100px] bg-cyan-100"
      />
    </div>
  );
}
