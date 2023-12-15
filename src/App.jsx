import { useContext, useState } from 'react';
import './App.css'
import { CounterContext } from './contexts/CounterContext';


function App() {

  const [value, setValue] = useState(0);

  const{state, onIncrement, onDecrement, onReset, onIncrementByValue} = useContext(CounterContext);


  return (
    <div>

      <div>
        <input type='number' placeholder='value' value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={() => onIncrementByValue(value)}>Increment by value</button>
      </div>

      <h1>Count value: {state.count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default App
