"use client";
import { useState } from "react";

export default function CounterApp() {
  const [numCount, setNumCount] = useState(0);

  const incrementCount = () => {
    setNumCount(numCount + 1);
  };

  const decrementCount = () => {
    setNumCount(numCount - 1);
  };

  const resetCount = () => {
    setNumCount(0);
  };

  const isEven = numCount % 2 === 0;

  return (
    <>
      <div className="text-center">
        <h1 className="mb-3">Counter App</h1>
        <h3>{numCount}</h3>
        {numCount === 0 ? " " : isEven ? "Even" : "Odd"} <br />
        <button
          className="m-2 border p-2 rounded-md"
          type="button"
          onClick={incrementCount}
        >
          Add
        </button>
        <button
          className="m-2 border p-2 rounded-md"
          type="button"
          onClick={decrementCount}
        >
          Sub
        </button>
        <button
          className="m-2 border p-2 rounded-md"
          type="button"
          onClick={resetCount}
        >
          {" "}
          Reset
        </button>
      </div>
    </>
  );
}
