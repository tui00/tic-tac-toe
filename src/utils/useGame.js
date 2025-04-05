import { useState } from 'react';
import checkWinner from './checkWinner';

export const CELL_STATUS = {
  EMPTY: 0,
  WINNING: 1,
  DRAW: 2
};

export function useGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winners, setWinners] = useState(null);
  const [draw, setDraw] = useState(false);

  const handleClick = (buttonNumber) => {
    if (board[buttonNumber] || winners) {
      return;
    }
    const newBoard = [...board];
    newBoard[buttonNumber] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setWinners(checkWinner(newBoard));
    if (newBoard.every(cell => cell) && winners === null) {
      setDraw(true);
    }
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinners(null);
    setIsXNext(true);
    setDraw(false);
  };

  const getStatusMessage = () => {
    if (winners) return `Победитель: ${board[winners[0]]}.`;
    if (draw) return 'Ничья.';
    return `Ход: ${isXNext ? 'X' : 'O'}.`;
  };

  return {
    board,
    winners,
    draw,
    isXNext,
    handleClick,
    handleReset,
    getStatusMessage
  };
} 