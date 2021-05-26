import React from "react";
import { useDispatch } from "react-redux";

export default function ComponentTwo(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Component Two</h1>
      <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
      <button onClick={() => dispatch({ type: "SUBTRACT" })}>Subtract</button>
      <button onClick={() => dispatch({ type: "CHANGE_POOP_TO_DUCK" })}>
        QUACK
      </button>
    </div>
  );
}