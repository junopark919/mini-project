import { useState } from 'react';

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

// I should've first divided the app into multiple components
function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipForMe, setTipForMe] = useState(0);
  const [tipForFriend, setTipForFriend] = useState(0);

  // derived state
  const tip = bill * ((tipForMe + tipForFriend) / 2 / 100);

  function handleReset() {
    setBill('');
    setTipForMe(0);
    setTipForFriend(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <Tip tip={tipForMe} onSetTip={setTipForMe}>
        How do you like the service?
      </Tip>
      <Tip tip={tipForFriend} onSetTip={setTipForFriend}>
        How did your friend like the service?
      </Tip>
      {bill > 0 && (
        <>
          {' '}
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ bill, tip, onSetTip, children }) {
  console.log(tip);

  // I thought I assign decimal into value at first, but integer is better here for output
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
