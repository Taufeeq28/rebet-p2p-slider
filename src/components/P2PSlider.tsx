import React from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import orbImage from '../assets/StaticAssets/orangeButton.png';
import whiteCheck from '../assets/StaticAssets/white_check.png';
import whiteClose from '../assets/StaticAssets/white_close.png';

const SLIDER_WIDTH = 440;
const ORB_WIDTH = 80;

const styles: { [key: string]: React.CSSProperties } = {
  sliderContainer: {
    width: `${SLIDER_WIDTH}px`,
    height: '94px',
    borderRadius: '26px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    position: 'relative',
    cursor: 'grab',
    transition: 'background 0.4s ease',
    fontFamily: 'system-ui, sans-serif',
    overflow: 'hidden',
    backgroundColor: '#222',
  },
  indicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 600,
    fontSize: '22px',
    zIndex: 1,
    userSelect: 'none',
    transition: 'color 0.2s',
    color: '#fff',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
  orbWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 5,
    width: `${ORB_WIDTH}px`,
    height: '72px',
    marginLeft: `-${ORB_WIDTH / 2}px`,
    marginTop: `-${ORB_WIDTH / 2}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

interface P2PSliderProps {
  onAccept: () => void;
  onDecline: () => void;
}

const P2PSlider: React.FC<P2PSliderProps> = ({ onAccept, onDecline }) => {
  const x = useMotionValue(0);

  const handleDragEnd = () => {
    const currentX = x.get();
    const maxDrag = (SLIDER_WIDTH / 2) - (ORB_WIDTH / 2);
    const snapTolerance = 4;

    if (currentX >= maxDrag - snapTolerance) {
      onAccept();
    } else if (currentX <= -maxDrag + snapTolerance) {
      onDecline();
    } else {
      animate(x, 0, { type: 'spring', stiffness: 500, damping: 25 });
    }
  };

  return (
    <div style={styles.sliderContainer}>
      {/* Decline Indicator */}
      <div style={styles.indicator}>
        <img src={whiteClose} alt="Decline Icon" style={styles.icon} />
        <span>Decline</span>
      </div>

      {/* Orb */}
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

      {/* Accept Indicator */}
      <div style={styles.indicator}>
        <span>Accept</span>
        <img src={whiteCheck} alt="Accept Icon" style={styles.icon} />
      </div>
    </div>
  );
};

export default P2PSlider;
