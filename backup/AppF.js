import './App.css';
import {useState,useEffect} from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  let plusHandler = () => {
      setCounter(counter + 1);
  }

  let minusHandler = () => {
      setCounter(counter - 1);
  }

  useEffect(()=>{
    if (counter < 0) {
      setCounter(0);
    }
  }, [counter]);

  return (
    <div className="App App-header">
      <button onClick = {plusHandler}>+</button>
      <h3>{counter}</h3>
      <button onClick = {minusHandler}>-</button>
    </div>
  );
}

export default App;
