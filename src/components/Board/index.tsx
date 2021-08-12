import React from 'react';
import './style.css';

interface BoardProps {
  children: React.ReactNode;
}

const Board: React.FC<BoardProps> = ({ children }) => (
  <div className="board">{children}</div>
);

export default Board;
