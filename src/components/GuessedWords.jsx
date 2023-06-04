import { PropTypes } from "prop-types";

import "./GuessedWords.scss";

function GuessedWords(props) {
  return (
    <div className="guessed-words">
      {props.guesses.map((guess, index) => {
        return (
          <div className="guess-box" key={index}>
            {guess.word.map((letter) => {
              return (
                <div className="input-box-placeholder" key={letter}>
                  <p>{letter}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

GuessedWords.propTypes = {
  guesses: PropTypes.object,
};

export default GuessedWords;
