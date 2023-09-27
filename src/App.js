import { useState } from 'react';
import './App.css';

function CountSection() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(new Date().getTime());
  }

  return (
    <div>
      <Button callFunc={handleClick} callCount={count}/>
      <Button callFunc={handleClick} callCount={count}/>
    </div>
  );

}

function Button({callFunc, callCount}) {
  return (
    <div>
      <button class="btn" onClick={callFunc}>Button</button>
      <span class="text">
        Times called: {callCount}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Button state:
        <CountSection />
      </header>
    </div>
  );
}

export default App;
