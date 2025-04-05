import { useState } from 'react';
import checkWinner from './checkWinner';

export function useGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winners, setWinners] = useState([]);
  const [draw, setDraw] = useState(false);

  const handleClick = (buttonNumber) => {
    if (board[buttonNumber] || winners.length !== 0) {
      return;
    }
    const newBoard = [...board];
    newBoard[buttonNumber] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    const newWinners = checkWinner(newBoard);
    setWinners(newWinners);
    setDraw(newBoard.every(cell => cell) && newWinners.length === 0);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinners([]);
    setIsXNext(true);
    setDraw(false);
  };

  const getStatusMessage = () => {
    if (winners.length !== 0) return `Победитель: ${board[winners[0]]}.`;
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