import React, { useEffect, useState } from 'react';
import { DEFAULT_THEME } from './themes';
import { applyTheme } from './themes/utils';
import { Button } from './components/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  /**
   * Run the applyTheme function every time the theme state changes
   */
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className="App bg-primary-background">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-primary-text">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="mt-4">
          {theme === 'base' ? (
            <Button onClick={() => setTheme('dark')}>Apply Dark Theme</Button>
          ) : (
            <Button onClick={() => setTheme('base')}>Apply Light Theme</Button>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
