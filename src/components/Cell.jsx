import PropTypes from 'prop-types';
import './styles/Cell.css';
import CELL_STATUS from '../statuses';

function Cell({ onClick, value, status }) {
  return (
    <button className={`cell ${status == CELL_STATUS.WINNING ? 'win' : status == CELL_STATUS.DRAW ? 'draw' : ''}`} onClick={onClick}>
      {value}
    </button>
  )
}

Cell.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string,
    status: PropTypes.number.isRequired
};

export default Cell;