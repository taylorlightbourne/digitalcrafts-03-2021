  import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Array() {
  const name = useSelector((state) => state.names);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Names</h1>
      <p>{name}</p>
      <button onClick={() => dispatch({ type: "CHANGE_NAMES" })}>Change Name</button>
    </div>
  );
}