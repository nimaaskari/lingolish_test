import PropTypes from "prop-types";
import "./StartMenu.scss";
import { useState } from "react";

function StartMenu(props) {
  const [show, setShow] = useState(true);
  function difficultyButtons(diff) {
    if (diff === "easy") {
      return (
        <div className="difficulty">
          <p>Difficulty</p>
          <button
            className=""
            id="easy"
            onClick={() => {
              props.changeDifficulty("easy");
            }}
          >
            Easy
          </button>
          <button
            className="difficulty-button-deactivated"
            id="medium"
            onClick={() => {
              props.changeDifficulty("medium");
            }}
          >
            Medium
          </button>
          <button
            className="difficulty-button-deactivated"
            id="hard"
            onClick={() => {
              props.changeDifficulty("hard");
            }}
          >
            Hard
          </button>
        </div>
      );
    }
    if (diff === "medium") {
      return (
        <div className="difficulty">
          <p>Difficulty</p>
          <button
            className="difficulty-button-deactivated"
            id="easy"
            onClick={() => {
              props.changeDifficulty("easy");
            }}
          >
            Easy
          </button>
          <button
            className=""
            id="medium"
            onClick={() => {
              props.changeDifficulty("medium");
            }}
          >
            Medium
          </button>
          <button
            className="difficulty-button-deactivated"
            id="hard"
            onClick={() => {
              props.changeDifficulty("hard");
            }}
          >
            Hard
          </button>
        </div>
      );
    }
    if (diff === "hard") {
      return (
        <div className="difficulty">
          <p>Difficulty</p>
          <button
            className="difficulty-button-deactivated"
            id="easy"
            onClick={() => {
              props.changeDifficulty("easy");
            }}
          >
            Easy
          </button>
          <button
            className="difficulty-button-deactivated"
            id="medium"
            onClick={() => {
              props.changeDifficulty("medium");
            }}
          >
            Medium
          </button>
          <button
            className=""
            id="hard"
            onClick={() => {
              props.changeDifficulty("hard");
            }}
          >
            Hard
          </button>
        </div>
      );
    }
  }

  function startHandler() {
    props.playingHandler(true);
    setShow(!show);
  }

  return (
    <>
      {show ? (
        <div className="start-menu">
          <h3>Death match mode</h3>
          {difficultyButtons(props.difficulty)}
          <button id="start" onClick={() => startHandler()}>
            Start
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

StartMenu.propTypes = {
  difficulty: PropTypes.string,
  changeDifficulty: PropTypes.func,
  playingHandler: PropTypes.func,
};

export default StartMenu;
