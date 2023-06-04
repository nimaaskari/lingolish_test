import PropTypes from "prop-types";
import "./StartMenu.scss";

function StartMenu(props) {
  return (
    <div className="start-menu">
      <h3>Death match mode</h3>
      {difficultyButtons(props.difficulty)}

      <button id="start">Start</button>
    </div>
  );
}

function difficultyButtons(diff) {
  if (diff === "easy") {
    return (
      <div className="difficulty">
        <p>Difficulty</p>
        <button className="" id="easy">
          Easy
        </button>
        <button className="difficulty-button-deactivated" id="medium">
          Medium
        </button>
        <button className="difficulty-button-deactivated" id="hard">
          Hard
        </button>
      </div>
    );
  }
  if (diff === "medium") {
    return (
      <div className="difficulty">
        <p>Difficulty</p>
        <button className="difficulty-button-deactivated" id="easy">
          Easy
        </button>
        <button className="" id="medium">
          Medium
        </button>
        <button className="difficulty-button-deactivated" id="hard">
          Hard
        </button>
      </div>
    );
  }
  if (diff === "hard") {
    return (
      <div className="difficulty">
        <p>Difficulty</p>
        <button className="difficulty-button-deactivated" id="easy">
          Easy
        </button>
        <button className="difficulty-button-deactivated" id="medium">
          Medium
        </button>
        <button className="" id="hard">
          Hard
        </button>
      </div>
    );
  }
}

StartMenu.propTypes = {
  difficulty: PropTypes.string,
};

export default StartMenu;
