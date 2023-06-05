import PropTypes from "prop-types";
import "./CountDown.scss";

function CountDown({ countDown, currentPlayer }) {
  return (
    <div className="countdown">
      {currentPlayer === "user" ? (
        <>
          <p>your turn</p>
          <p className="counter">{countDown}</p>
        </>
      ) : (
        <p>wait for your opponent</p>
      )}
    </div>
  );
}

CountDown.propTypes = {
  currentPlayer: PropTypes.string,
  countDown: PropTypes.number,
};

export default CountDown;
