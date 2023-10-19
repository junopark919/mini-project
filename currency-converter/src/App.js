import { useEffect, useState } from 'react';

export default function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [currency, setCurrency] = useState({});
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState('');

  useEffect(
    function () {
      async function fetchCurrency() {
        if (fromCurrency !== toCurrency) {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=100&from=${fromCurrency}&to=${toCurrency}`
          );
          const data = await res.json();

          setCurrency(data);
        } else {
          setOutput(query);
        }
      }

      fetchCurrency();
    },
    [fromCurrency, toCurrency, query]
  );

  const { amount: amount, rates: rates } = currency;

  useEffect(
    function () {
      function handleConverter() {
        if (fromCurrency !== toCurrency) {
          setOutput(
            (
              (Number(query) / Number(amount)) *
              Number(rates[toCurrency])
            ).toFixed(2)
          );
        }
      }

      handleConverter();
    },
    [currency]
  );

  function handleInput(e) {
    setQuery(e.target.value);
  }

  function handleFromCurrency(e) {
    setFromCurrency(e.target.value);
  }

  function handleToCurrency(e) {
    setToCurrency(e.target.value);
  }

  return (
    <div>
      <input type="text" value={query} onChange={handleInput} />
      <select onChange={handleFromCurrency}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={handleToCurrency}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
