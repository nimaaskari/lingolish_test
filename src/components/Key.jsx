import "./Key.scss";
import { PropTypes } from "prop-types";

function Key({ mode, letter, ...rest }) {
  if (mode === "green") {
    return (
      <div {...rest} className="key key-green">
        <p>{letter}</p>
      </div>
    );
  }
  if (mode === "yellow") {
    return (
      <div {...rest} className="key key-yellow">
        <p>{letter}</p>
      </div>
    );
  }
  if (mode === "gray") {
    return (
      <div {...rest} className="key key-gray">
        <p>{letter}</p>
      </div>
    );
  }
  return (
    <div {...rest} className="key key-neutral">
      <p>{letter}</p>
    </div>
  );
}

Key.propTypes = {
  letter: PropTypes.string,
  mode: PropTypes.string,
};

export default Key;
