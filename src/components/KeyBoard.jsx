import { useEffect, useState } from "react";
import Key from "./Key";
import "./KeyBoard.scss";
import backspaceIcon from "../assets/icons/backspace_icon.svg";

function KeyBoard() {
  const [keys, setKeys] = useState(initialKeys);

  useEffect(() => {
    setKeys(initialKeys);
  }, []);

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

const initialKeys = [
  {
    letter: "Q",
    mode: "neutral",
  },
  {
    letter: "W",
    mode: "neutral",
  },
  {
    letter: "E",
    mode: "neutral",
  },
  {
    letter: "R",
    mode: "neutral",
  },
  {
    letter: "T",
    mode: "neutral",
  },
  {
    letter: "Y",
    mode: "neutral",
  },
  {
    letter: "U",
    mode: "neutral",
  },
  {
    letter: "I",
    mode: "neutral",
  },
  {
    letter: "O",
    mode: "neutral",
  },
  {
    letter: "P",
    mode: "neutral",
  },
  {
    letter: "A",
    mode: "neutral",
  },
  {
    letter: "S",
    mode: "neutral",
  },
  {
    letter: "D",
    mode: "neutral",
  },
  {
    letter: "F",
    mode: "neutral",
  },
  {
    letter: "G",
    mode: "neutral",
  },
  {
    letter: "H",
    mode: "neutral",
  },
  {
    letter: "J",
    mode: "neutral",
  },
  {
    letter: "K",
    mode: "neutral",
  },
  {
    letter: "L",
    mode: "neutral",
  },
  {
    letter: "Z",
    mode: "neutral",
  },
  {
    letter: "X",
    mode: "neutral",
  },
  {
    letter: "C",
    mode: "neutral",
  },
  {
    letter: "V",
    mode: "neutral",
  },
  {
    letter: "B",
    mode: "neutral",
  },
  {
    letter: "N",
    mode: "neutral",
  },
  {
    letter: "M",
    mode: "neutral",
  },
];

export default KeyBoard;
