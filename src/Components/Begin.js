import React from "react";
import "./Begin.css";

function Begin(props) {
  return (
    <div>
      <button class="bag"  onClick={props.start}>
        Begin
      </button>
    </div>
  );
}

export default Begin;
