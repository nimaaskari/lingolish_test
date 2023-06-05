import { useEffect, useState } from "react";
import { words } from "./data";
import MainPage from "./pages/MainPage";
import "./App.css";

function App() {
  const [tragetWord, setTargetWord] = useState();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setTargetWord(words[randomIndex]);
  }, []);
  return <MainPage target={tragetWord} />;
}

export default App;
