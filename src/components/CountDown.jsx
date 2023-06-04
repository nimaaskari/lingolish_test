import { useEffect } from "react";
import PropTypes from "prop-types";
import "./CountDown.scss";

function CountDown({
  currentPlayer,
  changePlayer,
  isPlaying,
  countDown,
  countDownHandler,
}) {
  useEffect(() => {
    if (countDown === 0) {
      if (currentPlayer === "user") {
        changePlayer("computer");
      }
      if (currentPlayer === "computer") {
        changePlayer("user");
      }
      countDownHandler(10);
    }

    if (isPlaying) {
      countDown > 0 && setTimeout(() => countDownHandler(countDown - 1), 1000);
    }
  }, [countDown, isPlaying]);
  return (
    <div className="countdown">
      {currentPlayer === "user" ? (
        <p>your turn</p>
      ) : (
        <p>wait for your opponent</p>
      )}

      <p className="counter">{countDown}</p>
    </div>
  );
}

CountDown.propTypes = {
  currentPlayer: PropTypes.string,
  changePlayer: PropTypes.func,
  isPlaying: PropTypes.bool,
  countDown: PropTypes.number,
  countDownHandler: PropTypes.func,
};

export default CountDown;
