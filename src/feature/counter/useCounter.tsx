import {useState} from "react";

type IUseCounter = {
  counter: number,
  increment: () => void,
  decrement: () => void
};

// pure logic
export function useCounter(value: number = 0): IUseCounter {
  const [counter, setCounter] = useState(value);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return {counter, increment, decrement};
}