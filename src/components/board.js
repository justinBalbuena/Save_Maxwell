import "../styles.css";
//import inputWord from "../components/inputWord.js";
import BoardRow from "../components/boardRow.js";
import KeyBoard from "../components/keyboard.js";
import React from "react";

//word row array input keyboard && the input
function Board(props) {
  let number = props.guessNumber;
  let thisArray = props.item;
  console.log("Hey Look at me: " + number);
  console.log("Hey DONT: " + thisArray);
  function addLetter(letter) {
    if (thisArray[number].length < 5) {
      thisArray[number].push(letter);
    } else {
      alert("Array length exceeded!");
    }
  }

  function deleteLetter(letter) {
    if (thisArray[number].length > 1) {
      thisArray[number] = thisArray[number].slice(
        0,
        thisArray[number].length - 1
      );
    }
  }

  console.log("thisArray " + thisArray[0]);
  return (
    <div>
      <BoardRow class="wordRow0" row={thisArray[0]} num={0} />
      <BoardRow class="wordRow1" row={thisArray[1]} num={1} />
      <BoardRow class="wordRow2" row={thisArray[2]} num={2} />
      <BoardRow class="wordRow3" row={thisArray[3]} num={3} />
      <BoardRow class="wordRow4" row={thisArray[4]} num={4} />
      <BoardRow class="wordRow5" row={thisArray[5]} num={5} />
      <KeyBoard funcAdd={addLetter} funcDelete={deleteLetter} />
    </div>
  );
}

export default Board;
