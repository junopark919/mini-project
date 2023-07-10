import { useState } from 'react';

import InvestmentHeader from './components/InvestmentHeader/InvestmentHeader';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import InvestmentResult from './components/InvestmentResult/InvestmentResult';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput); // deriving user input data and then handling it is a better and explicit way
  };

  const yearlyData = [];

  // only when user input data exists
  if (userInput) {
    let currentSavings = userInput['currentSavings'];
    const yearlySavings = userInput['yearlySavings'];
    const expectedInterest = userInput['expectedInterest'] / 100;
    const duration = userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedInterest;
      currentSavings += yearlyInterest + yearlySavings;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalSavings: currentSavings,
        yearlySavings: yearlySavings,
      });
    }
  }

  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm onCalculate={calculateHandler} />
      {/* {isAvailable ? (
        <InvestmentResult items={investmentData} />
      ) : (
        <p className={styles['fallback']}>No data is available.</p>
      )} */}
      {!userInput && (
        <p style={{ textAlign: 'center' }}>No investment calculated yet.</p>
      )}{' '}
      {/* && */}
      {userInput && (
        <InvestmentResult
          data={yearlyData}
          initialInvestment={userInput['currentSavings']}
        />
      )}
    </div>
  );
}

export default App;
