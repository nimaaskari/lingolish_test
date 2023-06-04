import { useState } from "react";
import { words } from "./data";
import MainPage from "./pages/MainPage";
import "./App.css";

const wordsArray = words.split(",");

function App() {
  const [validWords, setValidWords] = useState(wordsArray);

  return <MainPage />;
}

export default App;
