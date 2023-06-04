import "./GameHeader.scss";

function GameHeader() {
  return (
    <div className="game-header">
      <h1>Death match mode</h1>
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
      <button id="start">Start</button>
    </div>
  );
}

export default GameHeader;
