import {act, renderHook} from '@testing-library/react-hooks'
import {CounterProvider, useCounterByProvider} from "./CounterProvider";
import renderer from "react-test-renderer";
import React from "react";
import {CounterByProvider} from "./CounterByProvider";

// test examples and the following links:

// https://github.com/testing-library/react-hooks-testing-library
// https://testing-library.com/docs/example-react-context/
// https://react-hooks-testing-library.com/usage/advanced-hooks#context

describe(CounterProvider.name, () => {
  test(useCounterByProvider.name, async () => {

    const {result} = renderHook(() => useCounterByProvider(), {
      wrapper: CounterProvider,
    })

    expect(result.current.counter).toBe(0)

    act(() => {
      result.current.increment()
    })

    expect(result.current.counter).toBe(1)

    act(() => {
      result.current.decrement()
    })

    expect(result.current.counter).toBe(0)
  })

  test('snapshot by provider', () => {
    const component1 = renderer.create(
      <CounterProvider>
        <CounterByProvider/>
      </CounterProvider>,
    );

    expect(component1.toJSON()).toMatchSnapshot();

    const component2 = renderer.create(
      <CounterProvider value={{counter: 10}}>
        <CounterByProvider/>
      </CounterProvider>,
    );
    expect(component2.toJSON()).toMatchSnapshot();
  })
})

