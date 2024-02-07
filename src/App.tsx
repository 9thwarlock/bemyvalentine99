import { useState } from "react";
import "./App.css";

const phrases = ["No", "Are you sure?", "bruh really?", "I'll remember this"];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return {

    
  };
}

export default App;

// https://www.tiktok.com/@mewtru/video/7331131143112166698
