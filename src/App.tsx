import React, { useEffect } from 'react';
import { DEFAULT_THEME } from './themes';
import { applyTheme } from './themes/utils';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    applyTheme(DEFAULT_THEME);
  }, []);

  return (
    <div className='App bg-primary-background'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
