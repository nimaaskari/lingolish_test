import { PropTypes } from "prop-types";
import "./InputBox.scss";

function InputBox({ inputLetters }) {
  return (
    <div className="input-box">
      {inputLetters.map((inputLetter, index) => {
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
