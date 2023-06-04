import { useState } from "react";
import "./MainPage.scss";
import StartMenu from "../components/StartMenu";
import KeyBoard from "../components/KeyBoard";
import InputBox from "../components/InputBox";
import GuessedWords from "../components/GuessedWords";

function MainPage() {
  const [difficulty, setDifficulty] = useState("easy");
  const [playing, setPlaying] = useState("false");

  function difficultyHandler(diff) {
    setDifficulty(diff);
  }

  function playingHandler(play) {
    setPlaying(play);
  }

  return (
    <div className="MainPage">
      {console.log(playing)}
      <StartMenu
        difficulty={difficulty}
        changeDifficulty={difficultyHandler}
        playingHandler={playingHandler}
      />
      <GuessedWords
        guesses={[{ user: "player", word: ["", "", "", "", ""] }]}
      />
      <InputBox inputLetters={["", "", "", "", ""]} />
      <KeyBoard />
    </div>
  );
}

export default MainPage;
