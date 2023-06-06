import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { words } from "../data";
import { initialKeys } from "../data";
import "./MainPage.scss";
import StartMenu from "../components/StartMenu";
import KeyBoard from "../components/KeyBoard";
import InputBox from "../components/InputBox";
import GuessedWords from "../components/GuessedWords";
import CountDown from "../components/CountDown";

function MainPage({ target }) {
  const [difficulty, setDifficulty] = useState("easy");
  const [playing, setPlaying] = useState(false);
  const [player, setPlayer] = useState("user");
  const [keys, setKeys] = useState(initialKeys);
  const [userInput, setUserInput] = useState([]);
  const [inputIndex, setInputIndex] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [computerUsedLetters, setComputerUsedLetters] = useState({
    grayLetters: [],
    greenLetters: [],
    yellowLetters: [],
  });
  const [winner, setWinner] = useState("");

  function userInputRemoveHandler() {
    let tempInput = userInput;
    let tempInputTrim = tempInput.join("");
    tempInputTrim = tempInputTrim.split("");
    tempInputTrim.pop();
    console.log(tempInputTrim);
    setUserInput(tempInputTrim);
    if (inputIndex != 0) {
      setInputIndex(inputIndex - 1);
    }
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

  function userGuessChecker(target, userGuess) {
    if (userGuess.join("") === target) {
      setWinner("user");
    }
    const targetArray = target.split("");
    const compareResult = [];
    let tempKeys = [...keys];
    for (let i = 0; i < userGuess.length; i++) {
      let temp = "";
      for (let j = 0; j < targetArray.length; j++) {
        if (userGuess[i] === targetArray[j] && i === j) {
          temp = "green";
          for (let k = 0; k < tempKeys.length; k++) {
            if (tempKeys[k].letter === userGuess[i]) {
              tempKeys[k].mode = "green";
            }
          }
          break;
        } else if (userGuess[i] === targetArray[j]) {
          temp = "yellow";
          for (let k = 0; k < tempKeys.length; k++) {
            if (tempKeys[k].letter === userGuess[i]) {
              tempKeys[k].mode = "yellow";
            }
          }
        }
      }
      if (temp === "") {
        temp = "gray";
        for (let k = 0; k < tempKeys.length; k++) {
          if (tempKeys[k].letter === userGuess[i]) {
            tempKeys[k].mode = "gray";
          }
        }
      }
      compareResult.push(temp);
    }

    setKeys(tempKeys);
    setGuesses([
      ...guesses,
      { player: "user", word: userGuess, compareResult },
    ]);

    setUserInput([]);
    setInputIndex(0);

    setPlayer("computer");
  }

  function computerGuess(difficulty = "easy", wordsArray) {
    setTimeout(() => {
      if (
        computerUsedLetters.grayLetters.length === 0 &&
        computerUsedLetters.greenLetters.length === 0 &&
        computerUsedLetters.yellowLetters.length === 0
      ) {
        const randomIndex = Math.floor(Math.random() * words.length);
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
        // in this difficulty computer only checks if the word have gray(irrelevant) characters or not.
        let validWords = grayValidator(wordsArray);
        const randomIndex = Math.floor(Math.random() * validWords.length);
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
      if (difficulty === "medium") {
        // in this difficulty computer check for not having gray characters and having yellow characters.
        let validWords = yellowValidator(grayValidator(wordsArray));
        const randomIndex = Math.floor(Math.random() * validWords.length);
        const mediumGuess = validWords[randomIndex];
        compare(mediumGuess, target);
        setGuesses([
          ...guesses,
          {
            player: "computer",
            word: mediumGuess.split(""),
            compareResult: ["gray", "gray", "gray", "gray", "gray"],
          },
        ]);

        setUserInput([]);
        setInputIndex(0);
        setPlayer("user");
        return;
      }
      if (difficulty === "hard") {
        // in this difficulty computer check for not having gray characters and having yellow characters and green characters in the right place.
        let validWords = greenValidator(
          yellowValidator(grayValidator(wordsArray))
        );
        const randomIndex = Math.floor(Math.random() * validWords.length);
        const hardGuess = validWords[randomIndex];
        compare(hardGuess, target);
        setGuesses([
          ...guesses,
          {
            player: "computer",
            word: hardGuess.split(""),
            compareResult: ["gray", "gray", "gray", "gray", "gray"],
          },
        ]);

        setUserInput([]);
        setInputIndex(0);
        setPlayer("user");
        return;
      }
    }, 3000); // a delay for more pleasent experience
  }

  function grayValidator(allWords) {
    let validatedWords = [];
    for (let i = 0; i < allWords.length; i++) {
      let valid = true;
      for (let j = 0; j < allWords[i].split("").length; j++) {
        if (
          computerUsedLetters.grayLetters.includes(allWords[i].split("")[j])
        ) {
          valid = false;
        }
      }
      if (valid) {
        validatedWords.push(allWords[i]);
      }
    }
    return validatedWords;
  }

  function yellowValidator(validWords) {
    let validatedWords = [];
    if (computerUsedLetters.yellowLetters.length != 0) {
      for (let i = 0; i < validWords.length; i++) {
        for (let j = 0; j < validWords[i].split("").length; j++) {
          if (
            computerUsedLetters.yellowLetters.includes(
              validWords[i].split("")[j]
            ) &&
            validWords[i].split("")[j] != computerUsedLetters.yellowLetters[j]
          ) {
            validatedWords.push(validWords[i]);
            break;
          }
        }
      }
    } else {
      validatedWords = [...validWords];
    }
    return validatedWords;
  }

  function greenValidator(validWords) {
    let validatedWords = [];
    if (computerUsedLetters.greenLetters.length != 0) {
      for (let i = 0; i < validWords.length; i++) {
        for (let j = 0; j < validWords[i].split("").length; j++) {
          if (
            computerUsedLetters.greenLetters.includes(
              validWords[i].split("")[j]
            ) &&
            validWords[i].split("")[j] == computerUsedLetters.greenLetters[j]
          ) {
            validatedWords.push(validWords[i]);
            break;
          }
        }
      }
    } else {
      validatedWords = [...validWords];
    }
    return validatedWords;
  }

  function compare(guessStr, targetWordStr) {
    if (guessStr === targetWordStr) {
      setWinner("computer");
    }
    let tempComputerUsedLetters = { ...computerUsedLetters };
    const guess = guessStr.split("");
    const targetWord = targetWordStr.split("");

    for (let i = 0; i < guess.length; i++) {
      if (
        !targetWord.includes(guess[i]) &&
        !tempComputerUsedLetters.grayLetters.includes(guess[i])
      ) {
        tempComputerUsedLetters.grayLetters.push(guess[i]);
      } else {
        for (let j = 0; j < targetWord.length; j++) {
          if (
            guess[i] === targetWord[j] &&
            i === j &&
            !tempComputerUsedLetters.greenLetters.includes(guess[i])
          ) {
            tempComputerUsedLetters.greenLetters[i] = guess[i];
          } else if (
            guess[i] === targetWord[j] &&
            !tempComputerUsedLetters.yellowLetters.includes(guess[i])
          ) {
            tempComputerUsedLetters.yellowLetters[i] = guess[i];
          }
        }
      }
    }
    setComputerUsedLetters(tempComputerUsedLetters);
  }

  useEffect(() => {
    if (winner === "user") {
      alert(`You Win! the secret word was: ${target}`);
      setPlaying(false);
    } else if (winner === "computer") {
      alert(`You Lost! the secret word was: ${target}`);
      setPlaying(false);
    }

    if (playing === true && player === "computer") {
      computerGuess(difficulty, words);
    }
  }, [player, playing, winner]);

  return (
    <div className="MainPage">
      <StartMenu
        difficulty={difficulty}
        changeDifficulty={setDifficulty}
        playingHandler={setPlaying}
      />
      <GuessedWords guesses={guesses} target={target} />
      <InputBox inputLetters={userInput} />
      <CountDown currentPlayer={player} />
      <KeyBoard
        inputHandler={userInputHandler}
        inputIndex={inputIndex}
        inputIndexHandler={setInputIndex}
        inputRemove={userInputRemoveHandler}
        keys={keys}
      />
    </div>
  );
}

MainPage.propTypes = {
  target: PropTypes.string,
};

export default MainPage;
