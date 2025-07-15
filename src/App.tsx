import React, { useState } from 'react';
import P2PSlider from './components/P2PSlider';

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0d0d12',
  } as React.CSSProperties,

  resultContainer: {
    width: 400,
    height: 120,
    borderRadius: 26,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',   // vertical center
    alignItems: 'center',       // horizontal center
    backgroundColor: '#1a1a1a',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
    textAlign: 'center',        // ensures text centers too
    padding: '1rem',            // optional spacing
  } as React.CSSProperties,

  acceptedText: {
    fontSize: '1.75rem',
    fontWeight: 600,
    color: '#4ade80',
    marginBottom: '1rem',
  } as React.CSSProperties,

  declinedText: {
    fontSize: '1.75rem',
    fontWeight: 600,
    color: '#f87171',
    marginBottom: '1rem',
  } as React.CSSProperties,

  resetButton: {
    padding: '0.5rem 1.25rem',
    fontSize: '1rem',
    backgroundColor: 'rgba(252, 66, 51, 1)', // vibrant orange
    color: '#fff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    boxShadow: '0 4px 10px rgba(253, 126, 20, 0.4)',
  } as React.CSSProperties,
};

function App() {
  const [action, setAction] = useState<'accepted' | 'declined' | null>(null);

  const handleAccept = () => setAction('accepted');
  const handleDecline = () => setAction('declined');
  const handleReset = () => setAction(null);

  return (
    <div style={styles.appContainer}>
      {action ? (
        <div style={styles.resultContainer}>
          <h2 style={action === 'accepted' ? styles.acceptedText : styles.declinedText}>
            {action === 'accepted' ? '✓ Accepted' : '✕ Declined'}
          </h2>
          <button onClick={handleReset} style={styles.resetButton}>
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
