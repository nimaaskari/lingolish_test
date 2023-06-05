import { useEffect, useState } from "react";
import { words } from "./data";
import MainPage from "./pages/MainPage";
import "./App.scss";

function App() {
  const [tragetWord, setTargetWord] = useState();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setTargetWord(words[randomIndex]);
  }, []);
  return (
    <div className="app">
      <MainPage target={tragetWord} />
    </div>
  );
}

export default App;
