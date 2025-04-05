import './styles/App.css'
import Board from './components/Board'
import { useGame } from './utils/useGame'

export default function App() {
  const {
    board,
    winners: winner,
    draw,
    handleClick,
    handleReset,
    getStatusMessage
  } = useGame();

  return (
    <>
      <p className='status'>{getStatusMessage()}</p>
      <Board 
        board={board} 
        winner={winner} 
        draw={draw} 
        onCellClick={handleClick} 
      />
      <button className='reset' onClick={handleReset}>Сбросить</button>
    </>
  )
}
