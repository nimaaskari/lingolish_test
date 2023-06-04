import { PropTypes } from "prop-types";
import "./InputBox.scss";

function InputBox(props) {
  return (
    <div className="input-box">
      {props.inputLetters.map((inputLetter) => {
        return (
          <div className="input-box-placeholder" key={inputLetter}>
            <p>{inputLetter}</p>
          </div>
        );
      })}
    </div>
  );
}

InputBox.propTypes = {
  inputLetters: PropTypes.object,
};

export default InputBox;
