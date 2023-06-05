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
  const [computerUsedLetters, setComputerUsedLetters] = useState({
    grayLetters: [],
    greenLetters: [],
    yellowLetters: [],
  });
  const [winner, setWinner] = useState("");

  // let timeOutId;

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
      setPlayer("computer");
    }
  }

  function mainGame() {
    // countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
    if (player === "computer") {
      computerGuess("easy", words);
    }
    // if (player === "user" && inputIndex === 4) {
    //   userGuessChecker(target, userInput);
    // }
  }

  function computerGuess(difficulty = "easy", wordsArray) {
    if (
      computerUsedLetters.grayLetters.length === 0 &&
      computerUsedLetters.greenLetters.length === 0 &&
      computerUsedLetters.yellowLetters.length === 0
    ) {
      const randomIndex = Math.floor(Math.random() * words.length) + 1;
      const computerFirstGuess = wordsArray[randomIndex];
      compare(computerFirstGuess, target);
      setGuesses([
        ...guesses,
        {
          player: "computer",
          word: computerFirstGuess.split(""),
          compareResult: ["gray", "gray", "gray", "gray", "gray"],
        },
      ]);

      setUserInput([]);
      setInputIndex(0);
      setPlayer("user");
      return;
    }
    if (difficulty === "easy") {
      // in this difficulty computer only checks if the word gray(irrelevant) characters or not.
      let validWords = [];
      for (let i = 0; i < wordsArray.length; i++) {
        let valid = true;
        for (let j = 0; j < wordsArray[i].split("").length; j++) {
          if (
            computerUsedLetters.grayLetters.includes(wordsArray[i].split("")[j])
          ) {
            valid = false;
          }
        }
        if (valid) {
          validWords.push(wordsArray[i]);
        }
      }
      console.log(target);
      console.log(validWords);
      console.log(computerUsedLetters);
      const randomIndex = Math.floor(Math.random() * validWords.length) + 1;
      const easyGuess = validWords[randomIndex];
      compare(easyGuess, target);
      setGuesses([
        ...guesses,
        {
          player: "computer",
          word: easyGuess.split(""),
          compareResult: ["gray", "gray", "gray", "gray", "gray"],
        },
      ]);

      setUserInput([]);
      setInputIndex(0);
      setPlayer("user");
      return;
    }
  }

  function compare(guessStr, targetWordStr) {
    if (guessStr === targetWordStr) {
      setWinner("computer");
    }
    let tempComputerUsedLetters = { ...computerUsedLetters };
    const guess = guessStr.split("");
    const targetWord = targetWordStr.split("");

    for (let i = 0; i < guess.length; i++) {
      for (let j = 0; j < targetWord.length; j++) {
        if (
          guess[i] === targetWord[j] &&
          i === j &&
          !tempComputerUsedLetters.greenLetters.includes(guess[i])
        ) {
          tempComputerUsedLetters.greenLetters.push(guess[i]);
        } else if (
          guess[i] === targetWord[j] &&
          !tempComputerUsedLetters.yellowLetters.includes(guess[i])
        ) {
          tempComputerUsedLetters.yellowLetters.push(guess[i]);
        } else if (!tempComputerUsedLetters.grayLetters.includes(guess[i])) {
          tempComputerUsedLetters.grayLetters.push(guess[i]);
        }
      }
    }
    setComputerUsedLetters(tempComputerUsedLetters);
  }
  useEffect(() => {
    if (winner === "user") {
      alert("You Win!");
    } else if (winner === "computer") {
      alert("You lost!");
    }

    if (playing === true) {
      mainGame();
    }
  }, [countDown, player, playing, winner]);

  return (
    <div className="MainPage">
      {mainGame()}
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
