import React from "react";
import "../styles.css";
import "../components/inputWord.js";

function BoardRow(props) {
  let letter0 = props.row[0];
  let letter1 = props.row[1];
  let letter2 = props.row[2];
  let letter3 = props.row[3];
  let letter4 = props.row[4];
  console.log("props row: " + letter0);

  return (
    <div>
      <div id={"boardRow" + props.num}>
        <div className="letter0 tile">
          <h1>{letter0}</h1>
        </div>
        <div className="letter1 tile">
          <h1>{letter1}</h1>
        </div>
        <div className="letter2 tile">
          <h1>{letter2}</h1>
        </div>
        <div className="letter3 tile">
          <h1>{letter3}</h1>
        </div>
        <div className="letter4 tile">
          <h1>{letter4}</h1>
        </div>
      </div>
    </div>
  );
}

export default BoardRow;
