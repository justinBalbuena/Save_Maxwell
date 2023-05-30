import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import words from "./words.json";
//import "./components/board.js";
import Keyboard from "./components/keyboard.js";

export default function App() {
  let word = "";
  const wordArray = [];
  let cellBrick = [];
  let gameStart = false;

  const [answer, setAnwser] = useState();

  // function getRandomWord() {
  //   if (gameStart === false) {
  //     let i = Math.floor(Math.random() * words.length);
  //     //console.log(words[i]);
  //     word = words[i];
  //     setAnwser(word);

  //     for (let j = 1; j < 5; j++) {
  //       wordArray.push(word.substing(j - 1, j));
  //     }
  //     //console.log(wordArray);
  //     //return words[i];
  //   }
  // }
  //getRandomWord();
  //gameStart === true;

  const renderWordArray = (letters) => {
    return letters.map((letter) => <li>{letter}</li>);
  };

  function arrayAppend(x) {
    cellBrick.append(x);
  }

  return (
    <div className="App">
      <h1>Save Maxwell</h1>
      <div></div>
      <div>{answer}</div>
      <h2>Guess the five letter word to save Maxwell!</h2>
      {/* <div>{answer}</div> */}

      {/* <input /> */}
      <div>
        <ul>{renderWordArray(wordArray)}</ul>
      </div>
      <button>enter</button>
      <Keyboard func={arrayAppend} />
    </div>
  );
}
