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
    padding: '0 10px',
    position: 'relative',
    cursor: 'grab',
    transition: 'background 0.4s ease',
    fontFamily: 'system-ui, sans-serif',
    overflow: 'hidden',
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
    height: `72px`,
    marginLeft: `-${ORB_WIDTH / 2}px`,
    marginTop: `-${ORB_WIDTH / 2}px`,
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
        0%   { box-shadow: 0 0 0px 0px rgba(255, 150, 0, 0.3); }
        50%  { box-shadow: 0 0 40px 5px rgba(255, 150, 0, 0.45); }
        100% { box-shadow: 0 0 8px 0px rgba(255, 150, 0, 0.3); }
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

  const getSliderStyles = () => {
    switch (status) {
      case 'declining':
        return {
          backgroundImage:
            `linear-gradient(to bottom, rgba(98, 22, 49, 1), rgba(255, 90, 139, 1)),
             radial-gradient(ellipse at top center, rgba(218, 73, 108, 1), transparent 60%),
             radial-gradient(ellipse at bottom center, rgba(218, 73, 108, 1), transparent 60%),
             linear-gradient(to right, rgba(98, 22, 49, 1), rgba(98, 22, 49, 1))`,
          backgroundClip: 'padding-box, border-box, border-box, border-box',
          backgroundOrigin: 'padding-box',
          border: '3px solid transparent',
        };
      case 'accepting':
        return {
          backgroundImage:
            `linear-gradient(to bottom, rgba(27, 125, 67, 1), rgba(108, 231, 150, 1)),
             radial-gradient(ellipse at top center, rgba(64, 198, 134, 1), transparent 60%),
             radial-gradient(ellipse at bottom center, rgba(64, 198, 134, 1), transparent 60%),
             linear-gradient(to right, rgba(26, 80, 62, 1), rgba(26, 80, 62, 1))`,
          backgroundClip: 'padding-box, border-box, border-box, border-box',
          backgroundOrigin: 'padding-box',
          border: '3px solid transparent',
        };
      default:
        return {
          backgroundImage:
            `linear-gradient(to bottom, rgba(20, 20, 27, 1), rgba(37, 37, 47, 1)),
             radial-gradient(ellipse at top center, rgba(255, 238, 146, 1), transparent 60%),
             radial-gradient(ellipse at bottom center, rgba(255, 238, 146, 1), transparent 60%),
             linear-gradient(to right, rgba(252, 66, 51, 1), rgba(252, 66, 51, 1))`,
          backgroundClip: 'padding-box, border-box, border-box, border-box',
          backgroundOrigin: 'padding-box',
          border: '3px solid transparent',
        };
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
    <motion.div style={{ ...styles.sliderContainer, ...getSliderStyles() }}>
      {/* Decline */}
      <motion.div style={{ ...styles.indicator, color: declineColor }}>
        <img src={declineIconSrc} alt="Decline" style={styles.icon} />
        <span>Decline</span>
        <LeftArrow />
      </motion.div>

      {/* Accept */}
      <motion.div style={{ ...styles.indicator, color: acceptColor }}>
        <RightArrow />
        <span>Accept</span>
        <img src={acceptIconSrc} alt="Accept" style={styles.icon} />
      </motion.div>

      {/* Orb */}
      <motion.div
        drag="x"
        dragConstraints={{
          left: -(SLIDER_WIDTH / 2) + ORB_WIDTH / 2,
          right: SLIDER_WIDTH / 2 - ORB_WIDTH / 2,
        }}
        dragElastic={0.1}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ ...styles.orbWrapper, x }}
        whileTap={{ cursor: 'grabbing' }}
      >
        <div
          style={{
            ...styles.orbContent,
            ...(status === 'idle' && {
              animation: 'pulseGlow 2s ease-in-out infinite',
            }),
          }}
        >
          <img src={orbImage} alt="Slider Orb" style={styles.orbGlowImage} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default P2PSlider;
