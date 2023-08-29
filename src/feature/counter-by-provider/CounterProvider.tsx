import React, {createContext, ReactNode, useContext, useState} from "react";

export type ICounterContext = {
  counter: number,
  increment: () => void,
  decrement: () => void
};

export const CounterContext = createContext<ICounterContext>(null as any)

export const CounterProvider = ({children, value}: { children: ReactNode, value?: Partial<ICounterContext> }) => {
  const [counter, setCounter] = useState(value?.counter ?? 0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const context: ICounterContext = {
    counter,
    increment,
    decrement
  }

  return <CounterContext.Provider value={context}>{children}</CounterContext.Provider>;
}

export const useCounterByProvider = () => {
  return useContext(CounterContext);
}