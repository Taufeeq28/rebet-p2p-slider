import React from 'react';
import { indicatorStyle, iconStyle } from './styles/indicatorStyles';

interface SliderIndicatorProps {
  type: 'accept' | 'decline';
  labelColor: string;
  icon: string;
  Arrow: React.ReactNode;
}

const SliderIndicator: React.FC<SliderIndicatorProps> = ({ type, labelColor, icon, Arrow }) => {
  return (
    <div style={{ ...indicatorStyle, color: labelColor }}>
      {type === 'decline' && <img src={icon} alt="Decline" style={iconStyle} />}
      <span>{type === 'accept' ? 'Accept' : 'Decline'}</span>
      {Arrow}
      {type === 'accept' && <img src={icon} alt="Accept" style={iconStyle} />}
    </div>
  );
};

export default SliderIndicator;
