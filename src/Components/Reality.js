import React from "react";

function Reality(props) {
  return (
    <div>
      <h1>Reality</h1>
      <button onClick={()=>props.logReality(1)}>1 Fake</button>
      <button onClick={()=>props.logReality(3)}>3</button>
      <button onClick={()=>props.logReality(4)}>4</button>
      <button onClick={()=>props.logReality(5)}>5</button>
      <button onClick={()=>props.logReality(6)}>6</button>
      <button onClick={()=>props.logReality(7)}>7</button>
      <button onClick={()=>props.logReality(8)}>8</button>
      <button onClick={()=>props.logReality(9)}>9</button>
      <button onClick={()=>props.logReality(10)}>10 Real</button>
      <br />
      <button onClick={props.prev}>Back</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
}

export default Reality;
