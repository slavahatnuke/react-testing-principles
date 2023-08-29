import React from 'react';
import './App.css';
import {Counter} from "./feature/counter/Counter";
import {CounterByProvider} from "./feature/counter-by-provider/CounterByProvider";
import {CounterProvider} from "./feature/counter-by-provider/CounterProvider";

function App() {
  return (
    <div className="App">
      <Counter value={10}/>
      <br/>
      <CounterProvider>
        <CounterByProvider/>
      </CounterProvider>
    </div>
  );
}

export default App;
