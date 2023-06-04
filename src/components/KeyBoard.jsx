import { useState } from "react";
import { initialKeys } from "../data";
import Key from "./Key";
import "./KeyBoard.scss";
import backspaceIcon from "../assets/icons/backspace_icon.svg";

function KeyBoard() {
  const [keys, setKeys] = useState(initialKeys);

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {keys.map((key, index) => {
          if (index >= 0 && index <= 9) {
            return <Key letter={key.letter} mode={key.mode} key={key.letter} />;
          }
        })}
      </div>
      <div className="keyboard-row">
        {keys.map((key, index) => {
          if (index >= 10 && index <= 18) {
            return <Key letter={key.letter} mode={key.mode} key={key.letter} />;
          }
        })}
      </div>
      <div className="keyboard-row">
        {keys.map((key, index) => {
          if (index >= 19 && index <= 25) {
            return <Key letter={key.letter} mode={key.mode} key={key.letter} />;
          }
        })}
        <div className="backspace">
          <img src={backspaceIcon} alt="backspace icon" />
        </div>
      </div>
    </div>
  );
}

export default KeyBoard;
