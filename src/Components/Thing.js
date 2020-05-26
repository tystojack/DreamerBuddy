import React, { useState } from "react";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};
function Thing(props) {
  const { resetValue, ...Item } = useInputValue("");

  return (
    <div>
      <h1>Objects </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(Item.value);
          resetValue();
        }}
      >
        <input placeholder="...Objects" {...Item} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={props.prev}>Back</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
}

export default Thing;
