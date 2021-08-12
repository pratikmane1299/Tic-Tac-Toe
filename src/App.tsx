import React from 'react';
import './App.css';

import Game from './components/Game';

interface AppProps {}

const App: React.FC<AppProps> = () => (
  <div className="container">
    <header>
      <h1>Tic Tac Toe</h1>
    </header>
    <Game />
  </div>
);

export default App;
