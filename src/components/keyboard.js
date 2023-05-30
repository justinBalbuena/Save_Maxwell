import React from "react";

function Keyboard(props) {
  return (
    <div>
      <div className="keybord">
        <div className="row row1″">
          <button onClick={() => props.funcAdd("Q")}>Q</button>
          <button onClick={() => props.funcAdd("W")}>W</button>
          <button onClick={() => props.funcAdd("E")}>E</button>
          <button onClick={() => props.funcAdd("R")}>R</button>
          <button onClick={() => props.funcAdd("T")}>T</button>
          <button onClick={() => props.funcAdd("Y")}>Y</button>
          <button onClick={() => props.funcAdd("U")}>U</button>
          <button onClick={() => props.funcAdd("I")}>I</button>
          <button onClick={() => props.funcAdd("O")}>O</button>
          <button onClick={() => props.funcAdd("P")}>P</button>
        </div>
        <div className="row row2">
          <button onClick={() => props.funcAdd("A")}>A</button>
          <button onClick={() => props.funcAdd("S")}>S</button>
          <button onClick={() => props.funcAdd("D")}>D</button>
          <button onClick={() => props.funcAdd("F")}>F</button>
          <button onClick={() => props.funcAdd("G")}>G</button>
          <button onClick={() => props.funcAdd("H")}>H</button>
          <button onClick={() => props.funcAdd("J")}>J</button>
          <button onClick={() => props.funcAdd("K")}>K</button>
          <button onClick={() => props.funcAdd("L")}>L</button>
        </div>
        <div className="row row3">
          <button onClick={() => props.funcAdd("Z")}>Z</button>
          <button onClick={() => props.funcAdd("X")}>X</button>
          <button onClick={() => props.funcAdd("C")}>C</button>
          <button onClick={() => props.funcAdd("V")}>V</button>
          <button onClick={() => props.funcAdd("B")}>B</button>
          <button onClick={() => props.funcAdd("N")}>N</button>
          <button onClick={() => props.funcAdd("M")}>M</button>
        </div>
        <div className="row row4">
          <div className="backSpace">
            <button onClick={() => props.funcDelete()} className="backButton">
              BackSpace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
//May want to refactor
export default Keyboard;
