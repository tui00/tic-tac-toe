import Cell from '../Cell/Cell'
import { CELL_STATUS } from '../../utils/useGame'
import PropTypes from 'prop-types'
import './Board.css'

function Board({ board, winner, draw, onCellClick }) {
    return (
        <div className='board'>
        {board.map((cell, i) => (
          <Cell 
            key={i} 
            value={cell} 
            status={winner != null && winner.includes(i) ? CELL_STATUS.WINNING : draw ? CELL_STATUS.DRAW : CELL_STATUS.EMPTY} 
            onClick={() => onCellClick(i)} 
          />
        ))}
      </div>
    )
}

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.string).isRequired,
    winner: PropTypes.arrayOf(PropTypes.number),
    draw: PropTypes.bool.isRequired,
    onCellClick: PropTypes.func.isRequired
}

export default Board;
