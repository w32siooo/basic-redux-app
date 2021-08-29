import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply, saveText } from "./store/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const savedText = useSelector((state) => state.saveText);

  const isLogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  const [state, setstate] = useState(0);

  function inputChange(val) {
    setstate(val.target.value);
  }

  return (
    <div className="App">
      {savedText.text}
      <h1>{counter}</h1>
      {isLogged ? <h3>Valuable info</h3> : ""}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <button onClick={() => dispatch(multiply(state))}>*{state}</button>
      <input type="text" onChange={inputChange}></input>
      <button
        onClick={() => {
          dispatch(saveText("lol"));
        }}
      >
        UpdateText
      </button>
    </div>
  );
}

export default App;
