import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
let curDate = new Date(2023, 9, 4, 1);
curDate = curDate.getHours();
let greeting = "";

const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Evening";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello sir, <span style={cssStyle}>{greeting} </span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
