import { PropTypes } from "prop-types";
import "./InputBox.scss";

function InputBox(props) {
  return (
    <div className="input-box">
      {props.inputLetters.map((inputLetter, index) => {
        return (
          <div className="input-box-placeholder" key={inputLetter + index}>
            <p>{inputLetter}</p>
          </div>
        );
      })}
    </div>
  );
}

InputBox.propTypes = {
  inputLetters: PropTypes.arrayOf(PropTypes.string),
};

export default InputBox;
