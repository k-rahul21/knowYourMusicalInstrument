import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🪕": "Banjo",
  "🎶": "Musical Notes",
  "🎻": "Violin",
  "🎙": "Studio Microphone",
  "🥁": "Drum",
  "🎚": "Level Slider",
  "🎼": "Musical Score",
  "🎵": "Musical Note",
  "🎷": "Saxophone",
  "🎹": "Musical Keyboard",
  "🎺": "trumpet",
  "🎸": "Guitar"
};

const emojiName = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) meaning = "Opps, try another one!!";

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Know your musical instruments name.</h1>
      <input
        onChange={emojiInputHandler}
        style={{ width: "80vw", padding: "0.5rem" }}
        placeholder="Enter musical emoji to know its name..."
      />

      <div className="outputArea"> {meaning} </div>
      <h3> Emoticons we know : </h3>
      {emojiName.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer", padding: "0.5rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
