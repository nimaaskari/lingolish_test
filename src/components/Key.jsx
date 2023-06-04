import "./Key.scss";
import { PropTypes } from "prop-types";

function Key(props) {
  if (props.mode === "green") {
    return (
      <div className="key key-green">
        <p>{props.letter}</p>
      </div>
    );
  }
  if (props.mode === "yellow") {
    return (
      <div className="key key-yellow">
        <p>{props.letter}</p>
      </div>
    );
  }
  if (props.mode === "gray") {
    return (
      <div className="key key-gray">
        <p>{props.letter}</p>
      </div>
    );
  }
  return (
    <div className="key key-neutral">
      <p>{props.letter}</p>
    </div>
  );
}

Key.propTypes = {
  letter: PropTypes.string,
  mode: PropTypes.string,
};

export default Key;
