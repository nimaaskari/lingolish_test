import "./KeyBoard.scss";
import Key from "./Key";

function KeyBoard() {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <Key letter="Q" />
      </div>
    </div>
  );
}

export default KeyBoard;
