import { useState } from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // function subtractStepHandler() {
  //   setStep((prevStep) => prevStep - 1);
  // }

  // function addStepHandler() {
  //   setStep((prevStep) => prevStep + 1);
  // }
  function stepHandler(e) {
    setStep((s) => (e.target.value > s ? s + 1 : s - 1));
  }

  function subtractCountHandler() {
    setCount((prevCount) => prevCount - step);
  }

  function addCountHandler() {
    setCount((prevCount) => prevCount + step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <input
          type="range"
          value={step}
          min="0"
          max="10"
          onChange={(e) => stepHandler(e)}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={subtractCountHandler}>-</button>
        <input type="text" value={count} />
        <button onClick={addCountHandler}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
