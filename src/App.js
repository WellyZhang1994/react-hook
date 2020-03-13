import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {

  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: "none"
          })
        }
      >
    Hello
    </button> &nbsp;&nbsp;&nbsp;
    <h1>{counter.info[0]}</h1>
    <button
        onClick={() =>
          dispatch({
            type: "SAMPLE"
          })
        }
      >
    World
      </button>  
    </div>
  );
}

export default App;
