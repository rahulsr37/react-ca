import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("cannot add more than 20!");
    }
  };

  const removeValue = () => {
    if (counter === 0) {
      console.log("cannot remove more that this.");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button disabled={counter === 20} onClick={addValue}>
        Add value
      </button>
      <br></br>
      <button disabled={counter === 0} onClick={removeValue}>
        Remove value
      </button>
    </>
  );
}

export default App;
