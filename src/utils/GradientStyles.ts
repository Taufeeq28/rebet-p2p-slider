import type { DragStatus } from '../hooks/useDragLogic';

export const getSliderStyles = (status: DragStatus) => {
  switch (status) {
    case 'declining':
      return {
        backgroundImage: `
          linear-gradient(to bottom, rgba(98, 22, 49, 1), rgba(255, 90, 139, 1)),
          radial-gradient(ellipse at top center, rgba(218, 73, 108, 1), transparent 60%),
          radial-gradient(ellipse at bottom center, rgba(218, 73, 108, 1), transparent 60%),
          linear-gradient(to right, rgba(98, 22, 49, 1), rgba(98, 22, 49, 1))
        `,
        backgroundClip: 'padding-box, border-box, border-box, border-box',
        backgroundOrigin: 'padding-box',
        border: '3px solid transparent',
      };
    case 'accepting':
      return {
        backgroundImage: `
          linear-gradient(to bottom, rgba(27, 125, 67, 1), rgba(108, 231, 150, 1)),
          radial-gradient(ellipse at top center, rgba(64, 198, 134, 1), transparent 60%),
          radial-gradient(ellipse at bottom center, rgba(64, 198, 134, 1), transparent 60%),
          linear-gradient(to right, rgba(26, 80, 62, 1), rgba(26, 80, 62, 1))
        `,
        backgroundClip: 'padding-box, border-box, border-box, border-box',
        backgroundOrigin: 'padding-box',
        border: '3px solid transparent',
      };
    default:
      return {
        backgroundImage: `
          linear-gradient(to bottom, rgba(20, 20, 27, 1), rgba(37, 37, 47, 1)),
          radial-gradient(ellipse at top center, rgba(255, 238, 146, 1), transparent 60%),
          radial-gradient(ellipse at bottom center, rgba(255, 238, 146, 1), transparent 60%),
          linear-gradient(to right, rgba(252, 66, 51, 1), rgba(252, 66, 51, 1))
        `,
        backgroundClip: 'padding-box, border-box, border-box, border-box',
        backgroundOrigin: 'padding-box',
        border: '3px solid transparent',
      };
  }
};
