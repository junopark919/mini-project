import { useState } from 'react';

import InvestmentHeader from './components/InvestmentHeader/InvestmentHeader';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import InvestmentResult from './components/InvestmentResult/InvestmentResult';

function App() {
  const [investmentData, setInvestmentData] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlySavings = +userInput['yearlySavings']; // as mentioned: feel free to change the shape...
    const expectedInterest = +userInput['expectedInterest'] / 100;
    const duration = +userInput['duration'];
    let totalInterest = 0;

    for (const item in userInput) {
      if (userInput[item] === '') {
        return setIsAvailable(false);
      } else if (+userInput[item] >= 0) {
        setIsAvailable(true);
      }
    }

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedInterest;
      const investedCapital = +userInput['currentSavings'] + yearlySavings * i;
      currentSavings += yearlyInterest + yearlySavings;
      totalInterest += yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        totalSavings: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      });
    }

    // do something with yearlyData ...
    setInvestmentData(yearlyData);
  };

  console.log(isAvailable);

  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm onCalculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {isAvailable ? (
        <InvestmentResult items={investmentData} />
      ) : (
        <p>No data is available.</p>
      )}
    </div>
  );
}

export default App;
