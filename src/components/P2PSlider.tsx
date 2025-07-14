import React from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import orbImage from '../assets/StaticAssets/orangeButton.png';

const SLIDER_WIDTH = 440;
const ORB_WIDTH = 80;

const styles: { [key: string]: React.CSSProperties } = {
  sliderContainer: {
    width: `${SLIDER_WIDTH}px`,
    height: '94px',
    borderRadius: '26px',
    backgroundColor: '#222',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  orbWrapper: {
    width: `${ORB_WIDTH}px`,
    height: '72px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  orbImage: {
    position: 'absolute',
    width: '180px',
    height: '160px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  },
};

const P2PSlider = () => {
  const x = useMotionValue(0);

  const handleDragEnd = () => {
    animate(x, 0, { type: 'spring', stiffness: 500, damping: 25 });
  };

  return (
    <div style={styles.sliderContainer}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: -(SLIDER_WIDTH / 2) + ORB_WIDTH / 2,
          right: SLIDER_WIDTH / 2 - ORB_WIDTH / 2,
        }}
        dragElastic={0.1}
        whileTap={{ cursor: 'grabbing' }}
        style={{ ...styles.orbWrapper, x }}
        onDragEnd={handleDragEnd}
      >
        <img
          src={orbImage}
          alt="Slider Orb"
          style={styles.orbImage}
        />
      </motion.div>
    </div>
  );
};

export default P2PSlider;
