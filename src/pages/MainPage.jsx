import { useState } from "react";
import "./MainPage.scss";
import StartMenu from "../components/StartMenu";
import KeyBoard from "../components/KeyBoard";
import InputBox from "../components/InputBox";
import GuessedWords from "../components/GuessedWords";

function MainPage() {
  const [difficulty, setDifficulty] = useState("easy");
  return (
    <div className="MainPage">
      <StartMenu difficulty={difficulty} />
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
