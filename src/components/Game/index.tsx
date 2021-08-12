/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import './style.css';

import Board from '../Board';
import Box from '../Box';

import { checkWinner } from '../../utils';

interface GameProps {}

const initialBoardState = Array(9).fill(null);

const Game: React.FC<GameProps> = () => {
  const [board, setBoard] = useState<string[]>(initialBoardState);

  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  function handleOnBoxClicked(index: number) {
    if (!board[index]) {
      const v = isXNext ? 'X' : 'O';
      const newBoardState = board.map((box, i) => (i === index ? v : box));

      setBoard(newBoardState);
      setIsXNext(!isXNext);

      const w = checkWinner(newBoardState);
      if (w) {
        setWinner(w === 'X' ? 'Player X won' : 'Player O won');
      }
    }
  }

  return (
    <div className="game-container">
      {winner && <span className="winner-msg">{winner}</span>}
      <div className="players">
        <span className={isXNext ? 'active' : ''}>X Turn</span>
        <span className={!isXNext ? 'active' : ''}>O Turn</span>
      </div>
      <Board>
        {board.map((value, i) => (
          <Box key={i} idx={i} value={value} onClick={handleOnBoxClicked} />
        ))}
      </Board>
      <button
        type="button"
        className="reset-btn"
        onClick={() => {
          setBoard(initialBoardState);
          setIsXNext(true);
          setWinner(null);
        }}>
        reset
      </button>
    </div>
  );
};

export default Game;
