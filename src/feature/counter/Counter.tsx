import {CounterView} from "./CounterView";
import {useCounter} from "./useCounter";

type ICounterProps = { value: number };

// Composition of logic and view
export const Counter = ({value}: ICounterProps) => {

  // counter logic
  const {counter, increment, decrement} = useCounter(value);

  // counter view
  return <CounterView counter={counter} increment={increment} decrement={decrement}/>;
};


