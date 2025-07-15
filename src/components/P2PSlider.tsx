import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

import {
  sliderContainerStyle,
} from './styles/sliderStyles';
import {
  indicatorStyle,
  iconStyle,
  arrowStyle,
} from './styles/indicatorStyles';

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

import { useDragLogic } from '../hooks/useDragLogic';
import { getSliderStyles } from '../utils/GradientStyles';
import { colors } from '../utils/Constants';

import Orb from './Orb';

interface P2PSliderProps {
  onAccept: () => void;
  onDecline: () => void;
}

const P2PSlider: React.FC<P2PSliderProps> = ({ onAccept, onDecline }) => {
  const { x, status, handleDrag, handleDragEnd } = useDragLogic(onAccept, onDecline);

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

  // State-based UI assets
  let declineColor, acceptColor, declineIconSrc, acceptIconSrc, LeftArrow, RightArrow;

  switch (status) {
    case 'declining':
      declineColor = colors.textRed;
      acceptColor = colors.textRed;
      declineIconSrc = redClose;
      acceptIconSrc = redCheck;
      LeftArrow = () => <img src={redLeftArrows} alt="Left Arrows" style={arrowStyle} />;
      RightArrow = () => <img src={redRightArrows} alt="Right Arrows" style={arrowStyle} />;
      break;
    case 'accepting':
      declineColor = colors.textGreen;
      acceptColor = colors.textGreen;
      declineIconSrc = greenClose;
      acceptIconSrc = greenCheck;
      LeftArrow = () => <img src={greenLeftArrows} alt="Left Arrows" style={arrowStyle} />;
      RightArrow = () => <img src={greenRightArrows} alt="Right Arrows" style={arrowStyle} />;
      break;
    default:
      declineColor = colors.textIdle;
      acceptColor = colors.textIdle;
      declineIconSrc = whiteClose;
      acceptIconSrc = whiteCheck;
      LeftArrow = () => <Lottie animationData={glowingLeftArrows} loop style={arrowStyle} />;
      RightArrow = () => <Lottie animationData={glowingRightArrows} loop style={arrowStyle} />;
  }

  return (
    <motion.div style={{ ...sliderContainerStyle, ...getSliderStyles(status) }}>
      <motion.div style={{ ...indicatorStyle, color: declineColor }}>
        <img src={declineIconSrc} alt="Decline" style={iconStyle} />
        <span>Decline</span>
        <LeftArrow />
      </motion.div>

      <motion.div style={{ ...indicatorStyle, color: acceptColor }}>
        <RightArrow />
        <span>Accept</span>
        <img src={acceptIconSrc} alt="Accept" style={iconStyle} />
      </motion.div>

      <Orb
        x={x}
        status={status}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      />
    </motion.div>
  );
};

export default P2PSlider;
