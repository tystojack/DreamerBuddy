import React from "react";

function Report(props) {
  return (
    <div>
      <h2>Emotions</h2>
      {props.Emolist}
      <h2>Actions</h2>
      {props.ActiList.map(({ text }) => (
        <div key={text}>{text}</div>
      ))}
      <h2>Characters</h2>
      {props.Characters.map(({ text }) => (
        <div key={text}>{text}</div>
      ))}

      <h2>Objects</h2>
      {props.ThingList.map(({ text }) => (
        <div key={text}>{text}</div>
      ))}

      <h2>Time Felt</h2>
      {props.Time}
      <h2>Reality</h2>
      {props.Reality}
      <h2>Description</h2>
      {props.Description.map(({ text }) => (
        <div key={text}>{text}</div>
      ))}
      <button onClick={props.next}>Discover Page</button>
    </div>
  );
}

export default Report;
