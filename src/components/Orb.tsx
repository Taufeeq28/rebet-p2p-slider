import React from 'react';
import { motion, MotionValue } from 'framer-motion';

import orangeButton from '../assets/StaticAssets/orangeButton.png';
import redButton from '../assets/StaticAssets/red_button.png';
import greenButton from '../assets/StaticAssets/green_button.png';

import {
  orbWrapperStyle,
  orbContentStyle,
  orbGlowImageStyle,
} from './styles/orbStyles';

import { ORB_WIDTH, SLIDER_WIDTH } from '../utils/Constants';
import type { DragStatus } from '../hooks/useDragLogic';

interface OrbProps {
  x: MotionValue<number>;
  status: DragStatus;
  onDrag: () => void;
  onDragEnd: () => void;
}

const Orb: React.FC<OrbProps> = ({ x, status, onDrag, onDragEnd }) => {
  const orbImage = {
    idle: orangeButton,
    accepting: greenButton,
    declining: redButton,
  }[status];

  return (
    <motion.div
      drag="x"
      dragConstraints={{
        left: -(SLIDER_WIDTH / 2) + ORB_WIDTH / 2,
        right: SLIDER_WIDTH / 2 - ORB_WIDTH / 2,
      }}
      dragElastic={0.1}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      style={{ ...orbWrapperStyle, x }}
      whileTap={{ cursor: 'grabbing' }}
    >
      <div
        style={{
          ...orbContentStyle,
          ...(status === 'idle' && {
            animation: 'pulseGlow 2s ease-in-out infinite',
          }),
        }}
      >
        <img src={orbImage} alt="Slider Orb" style={orbGlowImageStyle} />
      </div>
    </motion.div>
  );
};

export default Orb;
