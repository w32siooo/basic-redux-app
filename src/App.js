import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      hello <h1>{counter}</h1>
      {isLogged ? <h3>Valuable info</h3> : ""}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
    </div>
  );
}

export default App;
