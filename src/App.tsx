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
  

  return (
    <div style={styles.appContainer}>
        <P2PSlider />
    </div>
  );
}

export default App;
