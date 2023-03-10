import { useState } from 'react';
import Button from './Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count+1);
  const decrementCount = () => setCount(count-1);

  return (
    <div className="counter">
      <div className="counter-display">{count}</div>
      <div className='counter-btns'>
        <Button onClick={incrementCount}>Increment</Button>
        <Button onClick={decrementCount}>Decrement</Button>
      </div>
    </div>
  );
}

export default App;
