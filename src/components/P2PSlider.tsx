import React from 'react';
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
      position: 'relative',
    },
    orbImage: {
      position: 'absolute' ,
      width: '180px',
      height: '160px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
    },
  };
  
const P2PSlider = () => {
  return (
    <div style={styles.sliderContainer}>
      <div style={styles.orbWrapper}>
        <img
          src={orbImage}
          alt="Slider Orb"
          style={styles.orbImage}
        />
      </div>
    </div>
  );
};

export default P2PSlider;
