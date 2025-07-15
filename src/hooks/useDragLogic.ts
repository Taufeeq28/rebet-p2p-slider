import { useState } from 'react';
import { useMotionValue, animate } from 'framer-motion';

const SLIDER_WIDTH = 440;
const ORB_WIDTH = 80;

export type DragStatus = 'idle' | 'accepting' | 'declining';

export const useDragLogic = (onAccept: () => void, onDecline: () => void) => {
  const x = useMotionValue(0);
  const [status, setStatus] = useState<DragStatus>('idle');

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

  return { x, status, handleDrag, handleDragEnd };
};
