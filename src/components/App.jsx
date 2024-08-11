import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
    
  }
  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function resetCounter() {
   
    setCount(0);
    console.log("clicked");
  }
  return (
    <div>
      <h2>Counter App</h2> <h1>{count}</h1>
      <button onClick={increase}> +</button>
      <button onClick={decrease}> - </button>
      <br />
      <button className="btn" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}

export default App;