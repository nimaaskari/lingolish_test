import { PropTypes } from "prop-types";
import "./InputBox.scss";

function InputBox({ inputLetters }) {
  let inputChecked = inputLetters;
  if (inputLetters.length < 5) {
    for (let i = 0; (i = 5 - inputLetters.length); i++) {
      inputChecked.push("");
    }
  }
  return (
    <div className="input-box">
      {inputChecked.map((inputLetter, index) => {
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
