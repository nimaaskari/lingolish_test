// import { useState } from "react";
// import { words } from "./data";
import "./MainPage.scss";
import KeyBoard from "../components/KeyBoard";
import GameHeader from "../components/GameHeader";
import InputBox from "../components/InputBox";
import GuessedWords from "../components/GuessedWords";

// const wordsArray = words.split(",");

function MainPage() {
  // const [validWords, setValidWords] = useState(wordsArray);
  return (
    <div className="MainPage">
      <GameHeader />
      <GuessedWords
        guesses={[
          { user: "player", word: ["", "", "", "", ""] },
          { user: "player", word: ["", "", "", "", ""] },
          { user: "player", word: ["", "", "", "", ""] },
          { user: "player", word: ["", "", "", "", ""] },
          { user: "player", word: ["", "", "", "", ""] },
        ]}
      />
      <InputBox inputLetters={["", "", "", "", ""]} />
      <KeyBoard />
    </div>
  );
}

export default MainPage;
