import React, { useState } from 'react';
import P2PSlider from './components/P2PSlider';
import {
  appContainer,
  resultContainer,
  acceptedText,
  declinedText,
  resetButton,
} from '../src/components/styles/AppStyles';

const App: React.FC = () => {
  const [action, setAction] = useState<'accepted' | 'declined' | null>(null);

  const handleAccept = () => setAction('accepted');
  const handleDecline = () => setAction('declined');
  const handleReset = () => setAction(null);

  return (
    <div style={appContainer}>
      {action ? (
        <div style={resultContainer}>
          <h2 style={action === 'accepted' ? acceptedText : declinedText}>
            {action === 'accepted' ? '✓ Accepted' : '✕ Declined'}
          </h2>
          <button onClick={handleReset} style={resetButton}>
            Back to Slider
          </button>
        </div>
      ) : (
        <P2PSlider onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </div>
  );
};

export default App;
