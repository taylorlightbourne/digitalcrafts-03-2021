import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Users</h1>
      <p>{user}</p>
      <button onClick={() => dispatch({ type: "CHANGE_TO_JOE" })}>Change</button>
    </div>
  );
}