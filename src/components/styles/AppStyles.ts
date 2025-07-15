// src/styles/AppStyles.ts
export const appContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#0d0d12',
  } as React.CSSProperties;
  
  export const resultContainer = {
    width: 400,
    height: 120,
    borderRadius: 26,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
    textAlign: 'center',
    padding: '1rem',
  } as React.CSSProperties;
  
  export const acceptedText = {
    fontSize: '1.75rem',
    fontWeight: 600,
    color: '#4ade80',
    marginBottom: '1rem',
  } as React.CSSProperties;
  
  export const declinedText = {
    fontSize: '1.75rem',
    fontWeight: 600,
    color: '#f87171',
    marginBottom: '1rem',
  } as React.CSSProperties;
  
  export const resetButton = {
    padding: '0.5rem 1.25rem',
    fontSize: '1rem',
    backgroundColor: 'rgba(252, 66, 51, 1)',
    color: '#fff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    boxShadow: '0 4px 10px rgba(253, 126, 20, 0.4)',
  } as React.CSSProperties;
  