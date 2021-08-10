import React from 'react';
import './style.css';

interface BoxProps {
  value: string,
  idx: number,
  onClick: (idx: number) => void,
}

const Box: React.FC<BoxProps> = ({
  value,
  idx,
  onClick,
}) => {
  return (
    <div className={`box box-${idx}`} onClick={(e) => onClick(idx)}>
      <span>{value}</span>
    </div>
  );
}

export default Box;
