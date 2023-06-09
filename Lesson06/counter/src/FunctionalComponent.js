// Created by "rfce" snippet

import React, { useEffect, useState } from "react";

function FunctionalComponent() {
 
  const [counter, setCounter] = useState(0);
  const [isVisable, setIsVisable] = useState("Yes");
  const [age, addAge] = useState(20);
  const [timer, setTimer] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
    setIsVisable("No");
    addAge(30);
  };

  // ComponentDidMount
  useEffect(() => {
    console.log("UseEffect for componentDidMount");
    const myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval(myTimer);
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log("UseEffect for componentDidUpdate");
    console.log("Timer:", timer);
  }, [counter, age, timer]);

  // ComponentDidMount + ComponentDidUpdate
  useEffect(() => {
    console.log("Merge for componentDidMount & ComponentDidUpdate");
  });

  return (
    <div>
      <h1>Functional Component</h1>
      <h2>Count: {counter}</h2>
      <h3>Is Visable ? : {isVisable}</h3>
      <h4>Age : {age}</h4>
      <h4>Timer : {timer} </h4>
      <button onClick={() => increase()}>increase</button>
    </div>
  );
}

export default FunctionalComponent;
