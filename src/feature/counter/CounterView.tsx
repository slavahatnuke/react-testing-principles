type ICounterViewProps = { counter: number, increment: () => void, decrement: () => void };

// view purity
export function CounterView({counter, increment, decrement}: ICounterViewProps) {
  return (
    <>
      <h3 data-testid="counter-header">Counter ({counter})</h3>

      <button data-testid="increment" onClick={increment}>
        +
      </button>

      <button data-testid="decrement" onClick={decrement}>
        -
      </button>
    </>
  );
}