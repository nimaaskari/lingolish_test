// import { useState } from "react";
// import { words } from "./data";
import "./MainPage.scss";
import KeyBoard from "../components/KeyBoard";
import GameHeader from "../components/GameHeader";

// const wordsArray = words.split(",");

function MainPage() {
  // const [validWords, setValidWords] = useState(wordsArray);
  return (
    <div className="MainPage">
      <GameHeader />
      <KeyBoard />
    </div>
  );
}

export default MainPage;
