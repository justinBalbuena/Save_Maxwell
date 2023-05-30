import React from "react";
import "../styles.css";

export function checkUserGuess(inputtedGuess, answer) {
  let correctLetter = 0;
  let wrongPlace = 0;
  let wordSolution = {};

  for (let i = 0; i < 5; i++) {
    console.log(inputtedGuess[i] + " | " + answer[i]);
    if (inputtedGuess[i].toUpperCase() === answer[i]) {
      correctLetter++;
    } else {
      if (wordSolution[answer[i]]) {
        wordSolution[answer[i]] += 1;
      } else {
        wordSolution[answer[i]] = 1;
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    if (
      inputtedGuess[i].toUpperCase() !== answer[i] &&
      wordSolution[inputtedGuess[i]]
    ) {
      wrongPlace++;
      wordSolution[inputtedGuess[i]]--;
    }
  }

  return { correctLetter, wrongPlace };
}

console.log("Please work");

export function renderLetter(index, answer, inputtedGuess, indexRow) {
  let correct = inputtedGuess[index].toUpperCase() === answer[index];
  let wrongPlace = false;
  for (let i = 0; i < answer.length; i++) {
    if (!correct && answer[i] === inputtedGuess[index].toUpperCase()) {
      wrongPlace = true;
    }
  }
  let currentLetter = "letter" + index;
  let letter = document.getElementsByClassName(currentLetter)[indexRow];
  let boardRowNumber = "boardRow" + indexRow;
  let parent = document.getElementById(boardRowNumber);
  let child1 = parent.firstChild;
  let child2 = child1.nextSibling;
  let child3 = child2.nextSibling;
  let child4 = child3.nextSibling;
  let child5 = child4.nextSibling;

  if (index === 0) {
    if (correct && !wrongPlace) {
      letter.style.backgroundColor = "green";
      console.log(currentLetter + " was greened");
      letter.style.innerHTML = "A";
      child1.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    } else if (!correct && wrongPlace) {
      letter.style.backgroundColor = "yellow";
      console.log(currentLetter + " was yellowed");
      child1.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    } else {
      letter.style.backgroundColor = "grey";
      console.log(currentLetter + " was invaild (greyed)");
      child1.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    }
  } else if (index === 1) {
    if (correct && !wrongPlace) {
      letter.style.backgroundColor = "green";
      console.log(currentLetter + " was greened");
      letter.style.innerHTML = "A";
      child2.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    } else if (!correct && wrongPlace) {
      letter.style.backgroundColor = "yellow";
      console.log(currentLetter + " was yellowed");
      child2.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    } else {
      letter.style.backgroundColor = "grey";
      console.log(currentLetter + " was invaild (greyed)");
      child2.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    }
  } else if (index === 2) {
    if (correct && !wrongPlace) {
      letter.style.backgroundColor = "green";
      console.log(currentLetter + " was greened");
      letter.style.innerHTML = "A";
      child3.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    } else if (!correct && wrongPlace) {
      letter.style.backgroundColor = "yellow";
      console.log(currentLetter + " was yellowed");
      child3.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    } else {
      letter.style.backgroundColor = "grey";
      console.log(currentLetter + " was invaild (greyed)");
      child3.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    }
  } else if (index === 3) {
    if (correct && !wrongPlace) {
      letter.style.backgroundColor = "green";
      console.log(currentLetter + " was greened");
      letter.style.innerHTML = "A";
      child4.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    } else if (!correct && wrongPlace) {
      letter.style.backgroundColor = "yellow";
      console.log(currentLetter + " was yellowed");
      child4.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    } else {
      letter.style.backgroundColor = "grey";
      console.log(currentLetter + " was invaild (greyed)");
      child4.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    }
  } else if (index === 4) {
    if (correct && !wrongPlace) {
      letter.style.backgroundColor = "green";
      console.log(currentLetter + " was greened");
      letter.style.innerHTML = "A";
      child5.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    } else if (!correct && wrongPlace) {
      letter.style.backgroundColor = "yellow";
      console.log(currentLetter + " was yellowed");
      child5.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    } else {
      letter.style.backgroundColor = "grey";
      console.log(currentLetter + " was invaild (greyed)");
      child5.firstChild.innerHTML = inputtedGuess[index].toUpperCase();
    }
  }
}
