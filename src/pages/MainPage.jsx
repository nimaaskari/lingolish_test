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
  const [userInput, setUserInput] = useState(["", "", "", "", ""]);
  const [inputIndex, setInputIndex] = useState(0);
  const [countDown, setCountDown] = useState(10);

  function difficultyHandler(diff) {
    setDifficulty(diff);
  }

  function playingHandler(play) {
    setPlaying(play);
  }

  function playerHandler(player) {
    setPlayer(player);
  }

  function countDownHandler(count) {
    setCountDown(count);
  }

  function userInputHandler({ letter }, index) {
    console.log(player);
    let tempInput = userInput;
    if (index < 5) {
      tempInput[index] = letter;
      setUserInput(tempInput);
    }
    if (index === 4) {
      if (player === "user") {
        setPlayer("computer");
      } else if (player === "computer") {
        setPlayer("user");
      }
      setUserInput(["", "", "", "", ""]);
      // countDownHandler(10);
      // setInputIndex(0);
    }
  }

  function inputIndexHandler(index) {
    setInputIndex(index);
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
      <InputBox inputLetters={userInput} />
      <CountDown
        currentPlayer={player}
        changePlayer={playerHandler}
        isPlaying={playing}
        countDown={countDown}
        countDownHandler={countDownHandler}
      />
      <KeyBoard
        inputHandler={userInputHandler}
        inputIndex={inputIndex}
        inputIndexHandler={inputIndexHandler}
      />
    </div>
  );
}

export default MainPage;
