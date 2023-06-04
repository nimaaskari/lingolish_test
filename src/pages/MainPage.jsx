import { useState } from "react";
import "./MainPage.scss";
import StartMenu from "../components/StartMenu";
import KeyBoard from "../components/KeyBoard";
import InputBox from "../components/InputBox";
import GuessedWords from "../components/GuessedWords";
import CountDown from "../components/CountDown";

function MainPage() {
  const [difficulty, setDifficulty] = useState("easy");
  const [playing, setPlaying] = useState(false);
  const [player, setPlayer] = useState("user");

  function difficultyHandler(diff) {
    setDifficulty(diff);
  }

  function playingHandler(play) {
    setPlaying(play);
  }

  function playerHandler(player) {
    setPlayer(player);
  }

  return (
    <div className="MainPage">
      <StartMenu
        difficulty={difficulty}
        changeDifficulty={difficultyHandler}
        playingHandler={playingHandler}
      />
      <GuessedWords
        guesses={[{ user: "player", word: ["", "", "", "", ""] }]}
      />
      <InputBox inputLetters={["", "", "", "", ""]} />
      <CountDown
        currentPlayer={player}
        changePlayer={playerHandler}
        isPlaying={playing}
      />
      <KeyBoard />
    </div>
  );
}

export default MainPage;
