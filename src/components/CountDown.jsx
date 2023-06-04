import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./CountDown.scss";

function CountDown({ currentPlayer, changePlayer, isPlaying }) {
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    if (countDown === 0) {
      if (currentPlayer === "user") {
        changePlayer("computer");
        setCountDown(10);
      }
      if (currentPlayer === "computer") {
        changePlayer("user");
        setCountDown(10);
      }
    }

    if (isPlaying) {
      countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
    }
  }, [countDown, isPlaying]);
  return (
    <div className="countdown">
      {/* {startCountDown()} */}
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
};

export default CountDown;
