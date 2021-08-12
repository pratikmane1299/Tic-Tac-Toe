function checkWinner(board: string[]) {
  const possibleCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < possibleCombinations.length; i += 1) {
    const [idx1, idx2, idx3] = possibleCombinations[i];
    if (
      board[idx1] &&
      board[idx1] === board[idx2] &&
      board[idx1] === board[idx3]
    ) {
      return board[idx1];
    }
  }
  return null;
}

export { checkWinner };
