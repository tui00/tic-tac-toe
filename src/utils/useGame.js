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
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const handleClick = (buttonNumber) => {
    if (board[buttonNumber] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[buttonNumber] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setWinner(checkWinner(newBoard));
    if (newBoard.every(cell => cell) && winner == null) {
      setDraw(true);
    }
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
    setDraw(false);
  };

  const getStatusMessage = () => {
    if (winner) return `Победитель: ${board[winner[0]]}.`;
    if (draw) return 'Ничья.';
    return `Ход: ${isXNext ? 'X' : 'O'}.`;
  };

  return {
    board,
    winner,
    draw,
    isXNext,
    handleClick,
    handleReset,
    getStatusMessage
  };
} 