import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react';
import {Counter} from "./Counter";
import {act, renderHook} from '@testing-library/react-hooks'
import {CounterView} from "./CounterView";
import {useCounter} from "./useCounter";

// test examples and the following links:

//  https://www.robinwieruch.de/react-testing-library/
//  https://www.npmjs.com/package/@testing-library/react
//  https://jestjs.io/docs/tutorial-react
// https://www.browserstack.com/guide/unit-testing-of-react-apps-using-jest
// https://github.com/testing-library/react-hooks-testing-library
// https://testing-library.com/docs/example-react-context/

describe(Counter.name, () => {
  test('renders no crash', () => {
    render(<Counter value={0}/>);
  });

  test('increments / component testing', () => {
    const {getByTestId} = render(<Counter value={0}/>);
    const counterHeader = getByTestId('counter-header');
    const incrementButton = getByTestId('increment');

    expect(counterHeader).toHaveTextContent('Counter (0)');

    fireEvent.click(incrementButton);

    expect(counterHeader).toHaveTextContent('Counter (1)');
  });

  test('snapshot testing', () => {
    const component1 = renderer.create(
      <Counter value={0}/>
    );
    expect(component1.toJSON()).toMatchSnapshot();

    const component2 = renderer.create(
      <Counter value={12}/>
    );
    expect(component2.toJSON()).toMatchSnapshot();
  });

  test('snapshot testing / view', () => {
    const increment1 = jest.fn();
    const decrement1 = jest.fn();

    const component1 = renderer.create(
      <CounterView counter={0} increment={increment1} decrement={decrement1}/>
    );
    expect(component1.toJSON()).toMatchSnapshot();

    const increment2 = jest.fn();
    const decrement2 = jest.fn();

    const component2 = renderer.create(
      <CounterView counter={12} increment={increment2} decrement={decrement2}/>
    );

    expect(component2.toJSON()).toMatchSnapshot();
  });

  test('useCounter hook / increment & decrement', async () => {
    const {result, waitFor} = renderHook(() => useCounter(10))

    expect(result.current.counter).toBe(10)

    act(() => {
      result.current.increment()
    })

    expect(result.current.counter).toBe(11)

    act(() => {
      result.current.decrement()
    })

    expect(result.current.counter).toBe(10)

    // in case of async behavior, it could use `waitFor`

    await waitFor(() => {
      // this function is a bit foolish and does not bubble up the error
      expect(result.current.counter).toBe(10)
    })

  })
})

