import React, { useState } from 'react';
import P2PSlider from './components/P2PSlider';

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0d0d12',
  },
};

function App() {
  const [action, setAction] = useState<'accepted' | 'declined' | null>(null);

  const handleAccept = () => {
    setAction('accepted');
  };

  const handleDecline = () => {
    setAction('declined');
  };

  const handleReset = () => {
    setAction(null);
  };

  return (
    <div style={styles.appContainer}>
      {action ? (
        <div style={{
          width: 400,
          height: 94,
          borderRadius: 26,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1a1a1a',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            color: action === 'accepted' ? '#4ade80' : '#f87171',
            margin: 0,
          }}>
            {action === 'accepted' ? '✓ Accepted' : '✕ Declined'}
          </h2>
          <button
            onClick={handleReset}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1.25rem',
              fontSize: '1rem',
              backgroundColor: '#2563eb',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
          >
            Back to Slider
          </button>
        </div>
      ) : (
        <P2PSlider onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </div>
  );
}

export default App;
