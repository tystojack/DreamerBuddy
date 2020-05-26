import React from "react";

function Times(props) {
  return (
    <div>
      <h2>Time Felt</h2>
      <div>

      <button onClick={()=>{props.add('long')}}>long</button>
      <button onClick={()=> {props.add('short')}}>short</button>
      <button onClick={()=> {props.add('both')}}>both</button>
      <button onClick={()=> {props.add('normal')}}>normal</button>
      </div>
      <button onClick={props.prev}>Back</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
}

export default Times;
