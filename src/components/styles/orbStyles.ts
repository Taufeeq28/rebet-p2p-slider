// styles/orbStyles.ts
export const orbWrapperStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 5,
    width: '80px',
    height: '72px',
    marginLeft: '-40px',
    marginTop: '-40px',
  };
  
  export const orbContentStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };
  
  export const orbGlowImageStyle: React.CSSProperties = {
    position: 'absolute',
    width: '180px',
    height: '160px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  };
  