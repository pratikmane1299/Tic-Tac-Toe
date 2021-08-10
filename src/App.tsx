import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Box from './components/Box';

function checkWinner(board: string[]) {
  const possibleCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i = 0; i < possibleCombinations.length; i++) {
    const [idx1, idx2, idx3] = possibleCombinations[i];
    if (board[idx1] && board[idx1] === board[idx2] && board[idx1] === board[idx3]) {
      return board[idx1];
    }
  }
  return null;
}

const initialBoardState = Array(9).fill(null);

function App(props: {}) {
  const [board, setBoard] = useState<string[]>(initialBoardState);

  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  function handleOnBoxClicked(index: number) {

    if (!board[index]) {
      const v = isXNext ? 'X' : 'O';
      const newBoardState = board.map((box, i) => (i === index ? v : box));

      setBoard(newBoardState);
      setIsXNext(!isXNext);

      const winner = checkWinner(newBoardState);
      if (winner) {
        setWinner(winner === 'X' ? 'Player X won' : 'Player O won')
      }
    }
  }

  return (
    <div className="game-container">
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      {winner && (
        <span className="winner-msg">{winner}</span>
      )}
      <div className="players">
        <span className={isXNext ? 'active' : ''}>X's Turn</span>
        <span className={!isXNext ? 'active' : ''}>O's Turn</span>
      </div>
      <Board>
        {board.map((value, i) => (
          <Box idx={i} value={value} onClick={handleOnBoxClicked} />
        ))}
      </Board>
      <button className="reset-btn" onClick={() => {
        setBoard(initialBoardState);
        setIsXNext(true);
        setWinner(null);
      }}>reset</button>
    </div>
  );
}

export default App;
