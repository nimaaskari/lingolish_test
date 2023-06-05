import { useEffect, useState } from "react";

import { PropTypes } from "prop-types";
import "./MainPage.scss";
import StartMenu from "../components/StartMenu";
import KeyBoard from "../components/KeyBoard";
import InputBox from "../components/InputBox";
import GuessedWords from "../components/GuessedWords";
import CountDown from "../components/CountDown";
import { words } from "../data";

function MainPage({ target }) {
  const [difficulty, setDifficulty] = useState("easy");
  const [playing, setPlaying] = useState(false);
  const [player, setPlayer] = useState("user");
  const [userInput, setUserInput] = useState([]);
  const [inputIndex, setInputIndex] = useState(0);
  const [countDown, setCountDown] = useState(10);
  const [guesses, setGuesses] = useState([]);
  const [start, setStart] = useState(false);

  function difficultyHandler(diff) {
    setDifficulty(diff);
  }

  function playingHandler(play) {
    setPlaying(play);
  }

  function userInputHandler({ letter }, index) {
    let tempInput = userInput;
    if (index < 5) {
      tempInput[index] = letter;
      setUserInput(tempInput);
    }
    if (index === 4) {
      userGuessChecker(target, userInput);
      // if (player === "user") {
      //   setPlayer("computer");
      // } else if (player === "computer") {
      //   setPlayer("user");
      // }
      // tempInput = ["", "", "", "", ""];
      // setUserInput(["", "", "", "", ""]);
      // countDownHandler(10);
      // setInputIndex(0);
      // inputIndexHandler(0);
    }
  }

  function inputIndexHandler(index) {
    setInputIndex(index);
  }

  function userGuessChecker(target, userGuess) {
    const targetArray = target.split("");
    console.log(targetArray);
    console.log(userGuess);
    const compareResult = [];
    for (let i = 0; i < userGuess.length; i++) {
      let temp = "";
      for (let j = 0; j < target.length; j++) {
        if (userGuess[i] === target[j] && i === j) {
          temp = "green";
          break;
        } else if (userGuess[i] === target[j]) {
          temp = "yellow";
        }
      }
      if (temp === "") temp = "gray";
      compareResult.push(temp);
    }
    console.log(compareResult);

    setGuesses([
      ...guesses,
      { player: "user", word: userGuess, compareResult },
    ]);

    setUserInput([]);
    setInputIndex(0);
    setCountDown(0);
  }

  function mainGame() {
    //check for timeup
    if (countDown === 0) {
      if (player === "user") {
        setPlayer("computer");
      }
      if (player === "computer") {
        setPlayer("user");
      }
      setCountDown(10);
    }
    //handle the time counter
    if (player === "user") {
      countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
    }
    if (player === "computer") {
      // countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
    }
  }

  function computerGuess(difficulty = "easy", wordsArray) {
    const randomIndex = Math.floor(Math.random() * words.length) + 1;
    let computerGuess = wordsArray[randomIndex];
    let grayLetters = [];
    let greenLetters = [];
    let yellowLetters = [];
    if (difficulty === "easy") {
      compare(computerGuess, target);
    }
    function compare(guess, targetWord) {
      guess = guess.split("");
      targetWord = target.split("");
      guess.map((guessChar, guessIndex) => {
        targetWord.map((targetWordChar, targetWordIndex) => {
          if (guessChar === targetWordChar && guessIndex === targetWordIndex) {
            greenLetters.push(guessChar);
          } else if (guessChar === targetWordChar) {
            yellowLetters.push(guessChar);
          } else {
            grayLetters.push(guessChar);
          }
        });
      });
    }
  }

  useEffect(() => {
    console.log(countDown);
    if (playing === true) {
      mainGame();
    }
  }, [countDown, player, playing]);

  return (
    <div className="MainPage">
      <StartMenu
        difficulty={difficulty}
        changeDifficulty={difficultyHandler}
        playingHandler={playingHandler}
      />
      <GuessedWords guesses={guesses} target={target} />
      <InputBox inputLetters={userInput} />
      <CountDown currentPlayer={player} countDown={countDown} />
      <KeyBoard
        inputHandler={userInputHandler}
        inputIndex={inputIndex}
        inputIndexHandler={inputIndexHandler}
      />
    </div>
  );
}

MainPage.propTypes = {
  target: PropTypes.string,
};

export default MainPage;
