import { useState } from "react";
import { initialKeys } from "../data";
import { PropTypes } from "prop-types";
import Key from "./Key";
import "./KeyBoard.scss";
import backspaceIcon from "../assets/icons/backspace_icon.svg";

function KeyBoard({ inputHandler, inputIndex, inputIndexHandler }) {
  const [keys, setKeys] = useState(initialKeys);

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {keys.map((key, index) => {
          if (index >= 0 && index <= 9) {
            return (
              <Key
                letter={key.letter}
                mode={key.mode}
                key={key.letter}
                onClick={() => {
                  inputHandler(key, inputIndex);
                  inputIndexHandler(inputIndex + 1);
                }}
              />
            );
          }
        })}
      </div>
      <div className="keyboard-row">
        {keys.map((key, index) => {
          if (index >= 10 && index <= 18) {
            return (
              <Key
                letter={key.letter}
                mode={key.mode}
                key={key.letter}
                onClick={() => {
                  inputHandler(key, inputIndex);
                  inputIndexHandler(inputIndex + 1);
                }}
              />
            );
          }
        })}
      </div>
      <div className="keyboard-row">
        {keys.map((key, index) => {
          if (index >= 19 && index <= 25) {
            return (
              <Key
                letter={key.letter}
                mode={key.mode}
                key={key.letter}
                onClick={() => {
                  inputHandler(key, inputIndex);
                  inputIndexHandler(inputIndex + 1);
                }}
              />
            );
          }
        })}
        <div className="backspace">
          <img src={backspaceIcon} alt="backspace icon" />
        </div>
      </div>
    </div>
  );
}

KeyBoard.propTypes = {
  inputHandler: PropTypes.func,
  inputIndex: PropTypes.number,
  inputIndexHandler: PropTypes.func,
};

export default KeyBoard;
