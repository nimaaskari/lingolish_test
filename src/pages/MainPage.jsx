// import { useState } from "react";
// import { words } from "./data";
import "./MainPage.scss";
import KeyBoard from "../components/KeyBoard";
import GameHeader from "../components/GameHeader";
import InputBox from "../components/InputBox";

// const wordsArray = words.split(",");

function MainPage() {
  // const [validWords, setValidWords] = useState(wordsArray);
  return (
    <div className="MainPage">
      <GameHeader />
      <InputBox inputLetters={["", "", "", "", ""]} />
      <KeyBoard />
    </div>
  );
}

export default MainPage;
