import PropTypes from 'prop-types';
import './styles/Cell.css';

function Cell({ onClick, value, status }) {
  return (
    <button className={`cell ${status == 1 ? 'win' : status == 2 ? 'draw' : ''}`} onClick={onClick}>
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