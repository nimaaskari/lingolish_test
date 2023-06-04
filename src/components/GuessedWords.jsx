import { PropTypes } from "prop-types";

import "./GuessedWords.scss";

function GuessedWords(props) {
  return (
    <div className="guessed-words">
      {props.guesses.map((guess, index) => {
        return (
          <div className="guess-box" key={index}>
            {guess.word.map((letter, i) => {
              return (
                <div className="guess-box-placeholder" key={letter + i}>
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
  guesses: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string,
      word: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default GuessedWords;
