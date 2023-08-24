import { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState('');
  const [tipForMe, setTipForMe] = useState(0);
  const [tipForFriend, setTipForFriend] = useState(0);

  function handleBill(e) {
    setBill(Number(e.target.value));
  }

  function handleTipForMe(e) {
    if (!bill) {
      return;
    } else {
      setTipForMe(Number(e.target.value) * bill);
    }
  }

  function handleTipForFriend(e) {
    if (!bill) {
      return;
    } else {
      setTipForFriend(Number(e.target.value) * bill);
    }
  }

  function handleReset() {
    setBill('');
    setTipForMe(0);
    setTipForFriend(0);
  }

  return (
    <div>
      <div>
        How much was the bill?
        <input
          type="text"
          placeholder="Bill value"
          value={bill}
          onChange={(e) => handleBill(e)}
        />
      </div>
      <Tip handleTip={handleTipForMe}>How do you like the service?</Tip>
      <Tip handleTip={handleTipForFriend}>
        How did your friend like the service?
      </Tip>
      {bill > 0 && (
        <h3>{`You pay $${bill + tipForMe + tipForFriend} ($${bill} + $${
          tipForMe + tipForFriend
        }) tip`}</h3>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Tip({ bill, handleTip, children }) {
  return (
    <div>
      {children}
      <select onChange={(e) => handleTip(e)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05 / 2}>It was okay (5%)</option>
        <option value={0.1 / 2}>It was good (10%)</option>
        <option value={0.2 / 2}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
