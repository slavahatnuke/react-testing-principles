import {CounterView} from "../counter/CounterView";
import {useCounterByProvider} from "./CounterProvider";

type ICounterProps = {};

// Composition of logic and view
export const CounterByProvider = ({}: ICounterProps) => {
  // counter logic
  const {counter, increment, decrement} = useCounterByProvider();

  // counter view
  return <CounterView counter={counter} increment={increment} decrement={decrement}/>;
};


