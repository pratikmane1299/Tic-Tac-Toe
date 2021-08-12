import React from 'react';
import './style.css';

interface BoxProps {
  value: string;
  idx: number;
  onClick: (idx: number) => void;
}

const Box: React.FC<BoxProps> = ({ value, idx, onClick }) => (
  <div role="button" className={`box box-${idx}`} onClick={() => onClick(idx)}>
    <span>{value}</span>
  </div>
);

export default Box;
