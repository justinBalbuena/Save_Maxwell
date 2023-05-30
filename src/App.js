import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import data from "./words.json";
import Board from "./components/board.js";
import { renderLetter } from "./components/inputWord.js";
import { checkUserGuess } from "./components/inputWord.js";
import MaxwellTheme from "./maxwell.mp3";
import LavaFizzle from "./lavafizz.mp3";

export default function App() {
  let [displayWord, setDisplayWord] = useState("");
  let [imageUrl, setImageUrl] = useState(
    "https://media.tenor.com/qJRMLPlR3_8AAAAi/maxwell-cat.gif"
  );
  let [value, setValue] = useState(" ");
  let [guessNumTracker, setGuessNumTracker] = useState(0);
  let word = "";
  let wordArray0 = [];
  let wordArray1 = [];
  let wordArray2 = [];
  let wordArray3 = [];
  let wordArray4 = [];
  let wordArray5 = [];
  let wordsArray = [
    wordArray0,
    wordArray1,
    wordArray2,
    wordArray3,
    wordArray4,
    wordArray5
  ];
  let answerArray = [];
  let [answer, setAnswer] = useState("");
  let [gameStart, setGameStart] = useState(false);
  let maxOpac = 1.0;

  function enterBar(inputVal) {
    let word = inputVal;
    word = word.slice(0, 5);
    setValue(word);
    console.log("The Sacred Word: " + value);
  }

  function getRandomWord() {
    if (gameStart === false) {
      let i = Math.floor(Math.random() * data.length);
      //console.log(words[i]);
      word = data[i].toUpperCase();
      setAnswer(word);
      console.log("This is the true answer " + word);
      setGameStart(true);
    }
  }

  //word row array input keyboard && the input
  function renderRow(ans) {
    console.log("The word being taken: " + ans);
    wordsArray[guessNumTracker] = value;
    for (let indexNum = 0; indexNum < 5; indexNum++) {
      renderLetter(indexNum, ans, value, guessNumTracker);
    }

    console.log("Current Game: " + JSON.stringify(checkUserGuess(value, ans)));

    if (checkUserGuess(value, ans).correctLetter === 5) {
      alert("YOU WON!!!!");
    } else {
      let healthBar = document.getElementById("LavaBar");
      let maxCat = document.getElementById("saveMax");
      if (healthBar.value > 10) {
        healthBar.value -= 10;
        maxOpac -= 0.1;
        maxCat.style.opacity = maxOpac;
        AudioLava.play();
      } else {
        healthBar.value -= 10;
        maxOpac -= 0.2;
        maxCat.style.opacity = maxOpac;
        alert("Lose Condition");
      }
    }
  }

  if (answerArray.length < 1 && guessNumTracker === 0) {
    getRandomWord();
  }

  function store() {
    for (let j = 1; j < 5; j++) {
      /*
     wordsArray[guessNumTracker] = value
       .substring(j - 1, j)
       .toUpperCase();
      */
      wordsArray[guessNumTracker].push(value[j].toUpperCase());
    }
    renderRow(answer);

    setGuessNumTracker(guessNumTracker + 1);
  }

  //////Dont know if this will be finished in time
  /*
 function reset() {
   setGuessNumTracker(0);
   setValue("");
   setAnswer("");
   answerArray.length = 0;
   for (let a = 0; a < wordsArray.length; a++) {
     wordsArray[a].length = 0;
   }


   console.log("Reset guessNumTracker: " + guessNumTracker);
   console.log("Reset value: " + value);
   console.log("Reset answer: " + answer);
   console.log("Reset answerArray: " + answerArray);
   console.log("Reset wordsArray: " + wordsArray);
 }
 */

  //Play Maxwell Theme Here
  var AudioPlay = new Audio(MaxwellTheme);
  var AudioLava = new Audio(LavaFizzle);

  AudioPlay.loop = true;

  useEffect(() => {
    if (document.getElementById("LavaBar").value !== 0) {
      setImageUrl("https://media.tenor.com/qJRMLPlR3_8AAAAi/maxwell-cat.gif");
    } else {
      setDisplayWord(value);
      setImageUrl("https://i.ytimg.com/vi/VgEmFNTNK4E/hqdefault.jpg");
    }
  });

  return (
    <div className="App">
      <div className="gameHeader">
        {/* <h1>Save Maxwell</h1> */}

        <img
          className="maxwellHead"
          src="https://media1.giphy.com/media/l1NicIbUemRT5tJPiG/giphy.gif?cid=6c09b95269fffddfa63910c566ae98d9eaae8757e4249994&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=ts"
          alt="Big capital yellow E"
        />

        <div className="gameTitles">
          <h1 className="headTitle">Maxwell's Daring Escape From Vocabulary</h1>

          <div></div>
          {/* <div>{answer}</div> */}
          <h2>Guess the five letter word to save Maxwell!</h2>
          {/* <div>{answer}</div> */}
        </div>

        <img
          className="maxwellHead"
          src="https://media.tenor.com/rm9OMU19bEMAAAAi/maxwell-cat.gif"
          alt="maxwell bobbing back and forth"
        />
      </div>

      {/* <input onInput={(object) => {set/> */}
      <div className="wordDisplay">
        <h1>The word is {displayWord}</h1>
      </div>

      <div className="gameContainer">
        <div className="leftContain">
          <div className="LavaBox">
            <progress id="LavaBar" value="60" max="60">
              {" "}
              32%{" "}
            </progress>

            {/* {document.getElementById("LavaBar").value === 0 ? ( */}

            <img id="saveMax" src={imageUrl} alt="Tuxedo Cat" />
          </div>

          <div className="inputField">
            <input
              placeholder="Type in here"
              onChange={(e) => enterBar(e.target.value)}
            />
            <div> {value} </div>
            <button onClick={store}>enter</button>
          </div>

          {/* <button onClick={reset}>reset</button> */}
        </div>

        <Board guessNumber={guessNumTracker} item={wordsArray} />
      </div>
    </div>
  );
}

//enter word in keyboard and input for it to display
