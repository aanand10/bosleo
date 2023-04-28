import { useState } from "react";

const Trial = () => {
  const [set, setState] = useState({ counter1: 1, counter2: 2 });

  const counter10 = () => {
    setState({ ...set, counter1: num++ });
  };
  const counter20 = () => {
    setState({ ...set, counter2: 20 });
  };

  return (
    <>
      <div>
        <button onClick={counter10}>btn1</button>
        <button onClick={counter20}>btn2</button>
        <h1>counter1 value : {set.counter1}</h1>
        <h1>counter2 value : {set.counter2}</h1>
      </div>
    </>
  );
};

export default Trial;
