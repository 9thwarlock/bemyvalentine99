import { useState, useEffect } from "react";
import "./App.css";
import hotlineBlingAudio from "./drake-hotline-bling-low-quality.mp3";
import vineBoomAudio from "./vine-boom.mp3";
import amongUsAudio from "./amongus.mp3";

const phrases = [
  "No",
  "Are you sure?",
  "bruh really?",
  "I'll remember this",
  "Are you fr right now ",
  "Ok bruh chill",
  "Did someone already ask you ",
  "Who is it",
  "I'll find them ",
  "Ok c'mon just press yes",
  "Damn u really cant help it can't you",
  "wowww fake",
  "<---- Press it",
];

const gifList = [
  "https://media.tenor.com/ri-Ue99WZ4UAAAAM/angry-cat.gif",
  "https://gifdb.com/images/high/cute-kitten-cat-angry-working-computer-fy0h8njh2fmotcse.gif",
  "https://gifdb.com/images/high/angry-bear-milk-cute-frustrated-u5p5716cs2na8gtu.gif",
  "https://i.pinimg.com/originals/7c/09/de/7c09defe541e357f16e9ecaaea21d0e1.gif",
  "https://media1.tenor.com/m/t7_iTN0iYekAAAAd/sad-sad-cat.gif",

  // Add more GIF URLs as needed
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);

    // Choose one of the two sounds randomly
    const randomSound = Math.random() < 0.5 ? vineBoomAudio : amongUsAudio;

    // Create a new Audio element with the selected sound
    const newAudio = new Audio(randomSound);

    // Play the selected sound
    newAudio
      .play()
      .catch((error) => console.error("Error playing audio:", error));

    // Change the current GIF index for replacement
    setCurrentGifIndex((prevIndex) =>
      prevIndex < gifList.length - 1 ? prevIndex + 1 : 0,
    );
  }

  function handleYesClick() {
    // Set YesPressed to true to trigger the Yes effect
    setYesPressed(true);

    // Play the hotline bling audio continuously
    const hotlineBling = new Audio(hotlineBlingAudio);
    hotlineBling.loop = true;
    hotlineBling
      .play()
      .catch((error) => console.error("Error playing audio:", error));
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">Yay!! See you on Wednesday</div>
        </>
      ) : (
        <>
          <img alt="bear with heart" src={gifList[currentGifIndex]} />

          <div>Khushi will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{
                fontSize: yesButtonSize,
                backgroundColor: "#FF6961", // Light red
                color: "#FFFFFF", // White text
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="noButton"
              style={{
                backgroundColor: "#4169E1", // Royal blue
                color: "#FFFFFF", // White text
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

// https://www.tiktok.com/@mewtru/video/7331131143112166698
