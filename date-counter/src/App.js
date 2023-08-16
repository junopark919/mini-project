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
    // setStep((s) => (e.target.value > s ? s + 1 : s - 1));
    setStep(Number(e.target.value));
  }

  function subtractCountHandler() {
    setCount((prev) => prev - step);
  }

  function addCountHandler() {
    setCount((prev) => prev + step);
  }

  function resetHandler(e) {
    setStep(1);
    setCount(0);
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
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
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
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={(e) => resetHandler(e)}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
