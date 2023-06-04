import "./Key.scss";
import { PropTypes } from "prop-types";

function Key(props) {
  return (
    <div className="Key">
      <p>{props.letter}</p>
    </div>
  );
}

Key.propTypes = {
  letter: PropTypes.string,
};

export default Key;
