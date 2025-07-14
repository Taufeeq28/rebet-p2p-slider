import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import orbImage from '../assets/StaticAssets/orangeButton.png';

const styles: { [key: string]: React.CSSProperties } = {
  sliderContainer: {
    width: '440px',
    height: '94px',
    borderRadius: '26px',
    backgroundColor: '#222',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  orbWrapper: {
    width: '80px',
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

  return (
    <div style={styles.sliderContainer}>
      <motion.div
        drag="x"
        style={{ ...styles.orbWrapper, x }}
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
