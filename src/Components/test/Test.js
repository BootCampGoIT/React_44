import React, { useState, useEffect } from "react";

const Test = () => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  useEffect(() => {
    console.log(counter);
  });
  //   useEffect(() => {
  //     console.log(counter);
  //   }, []);
  //   useEffect(() => {
  //     console.log("counter:", counter);
  //   }, [counter]);
  //   useEffect(() => {
  //     console.log("counter1:", counter1);
  //   }, [counter1]);

  const onHandleClick = (e) => {
    const { name } = e.target;

    switch (name) {
      case "increment":
        setCounter((prev) => prev + 1);
        break;
      case "decrement":
        setCounter((prev) => prev - 1);
        break;
      case "increment1":
        setCounter1((prev) => prev + 1);
        break;
      case "decrement1":
        setCounter1((prev) => prev - 1);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <button type='button' name='increment' onClick={onHandleClick}>
        Increment
      </button>
      <h2>{counter}</h2>
      <button type='button' name='decrement' onClick={onHandleClick}>
        Decrement
      </button>
      <hr />
      <button type='button' name='increment1' onClick={onHandleClick}>
        Increment
      </button>
      <h2>{counter1}</h2>
      <button type='button' name='decrement1' onClick={onHandleClick}>
        Decrement
      </button>
    </>
  );
};

export default Test;
