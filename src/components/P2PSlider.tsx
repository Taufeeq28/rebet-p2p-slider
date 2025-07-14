import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Lottie from 'lottie-react';

import orangeButton from '../assets/StaticAssets/orangeButton.png';
import redButton from '../assets/StaticAssets/red_button.png';
import greenButton from '../assets/StaticAssets/green_button.png';

import whiteCheck from '../assets/StaticAssets/white_check.png';
import whiteClose from '../assets/StaticAssets/white_close.png';
import greenCheck from '../assets/StaticAssets/green_check.png';
import greenClose from '../assets/StaticAssets/green_close.png';
import redCheck from '../assets/StaticAssets/red_check.png';
import redClose from '../assets/StaticAssets/red_close.png';

import greenLeftArrows from '../assets/StaticAssets/green_left_arrows.png';
import greenRightArrows from '../assets/StaticAssets/green_right_arrows.png';
import redLeftArrows from '../assets/StaticAssets/red_left_arrows.png';
import redRightArrows from '../assets/StaticAssets/red_right_arrows.png';

import glowingLeftArrows from '../assets/AnimatedAssets/glowing_left_arrows.json';
import glowingRightArrows from '../assets/AnimatedAssets/glowing_right_arrows.json';

const SLIDER_WIDTH = 440;
const ORB_WIDTH = 80;

const colors = {
  textIdle: '#FFFFFF',
  textRed: 'rgba(128, 32, 55, 1)',
  textGreen: 'rgba(7, 110, 73, 1)',
};

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
  orbContent: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  orbGlowImage: {
    position: 'absolute',
    width: '180px',
    height: '160px',
    top: '50%',
    left: '50%',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  },
  indicatorArrow: {
    width: '60px',
    height: '40px',
  },
};

interface P2PSliderProps {
  onAccept: () => void;
  onDecline: () => void;
}

const P2PSlider: React.FC<P2PSliderProps> = ({ onAccept, onDecline }) => {
  const x = useMotionValue(0);
  const [status, setStatus] = useState<'idle' | 'accepting' | 'declining'>('idle');

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulseGlow {
        0%   { box-shadow: 0 0 0px 0px rgba(255, 106, 0, 0.4); }
        50%  { box-shadow: 0 0 40px 5px rgba(255, 106, 0, 0.6); }
        100% { box-shadow: 0 0 10px 0px rgba(255, 106, 0, 0.4); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleDrag = () => {
    const currentX = x.get();
    if (currentX > 10) setStatus('accepting');
    else if (currentX < -10) setStatus('declining');
    else setStatus('idle');
  };

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
      setStatus('idle');
    }
  };

  let declineColor, acceptColor, declineIconSrc, acceptIconSrc, orbImage, LeftArrow, RightArrow;

  switch (status) {
    case 'declining':
      declineColor = colors.textRed;
      acceptColor = colors.textRed;
      declineIconSrc = redClose;
      acceptIconSrc = redCheck;
      orbImage = redButton;
      LeftArrow = () => <img src={redLeftArrows} alt="Left Arrows" style={styles.indicatorArrow} />;
      RightArrow = () => <img src={redRightArrows} alt="Right Arrows" style={styles.indicatorArrow} />;
      break;
    case 'accepting':
      declineColor = colors.textGreen;
      acceptColor = colors.textGreen;
      declineIconSrc = greenClose;
      acceptIconSrc = greenCheck;
      orbImage = greenButton;
      LeftArrow = () => <img src={greenLeftArrows} alt="Left Arrows" style={styles.indicatorArrow} />;
      RightArrow = () => <img src={greenRightArrows} alt="Right Arrows" style={styles.indicatorArrow} />;
      break;
    default:
      declineColor = colors.textIdle;
      acceptColor = colors.textIdle;
      declineIconSrc = whiteClose;
      acceptIconSrc = whiteCheck;
      orbImage = orangeButton;
      LeftArrow = () => <Lottie animationData={glowingLeftArrows} loop style={styles.indicatorArrow} />;
      RightArrow = () => <Lottie animationData={glowingRightArrows} loop style={styles.indicatorArrow} />;
  }

  return (
    <div style={styles.sliderContainer}>
      {/* Decline Indicator */}
      <div style={{ ...styles.indicator, color: declineColor }}>
        <img src={declineIconSrc} alt="Decline Icon" style={styles.icon} />
        <span>Decline</span>
        <LeftArrow />
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
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ ...styles.orbWrapper, x }}
      >
       <div
          style={{
            ...styles.orbContent,
            ...(status === 'idle' && {
              animation: 'pulseGlow 3s ease-in-out infinite',
            }),
          }}
        >
          <img src={orbImage} alt="Slider Orb" style={styles.orbGlowImage} />
        </div>
      </motion.div>

      {/* Accept Indicator */}
      <div style={{ ...styles.indicator, color: acceptColor }}>
        <RightArrow />
        <span>Accept</span>
        <img src={acceptIconSrc} alt="Accept Icon" style={styles.icon} />
      </div>
    </div>
  );
};

export default P2PSlider;
