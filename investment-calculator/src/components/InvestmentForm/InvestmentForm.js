import { useState } from 'react';

import styles from './InvestmentForm.module.css';

const InvestmentForm = (props) => {
  const initialUserInput = {
    enteredCurrentSavings: '',
    enteredYearlySavings: '',
    enteredExpectedInterest: '',
    enteredDuration: '',
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: +value }; // '+' converts the string value to a number
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const investmentData = {
      currentSavings: userInput['enteredCurrentSavings'],
      yearlySavings: userInput['enteredYearlySavings'],
      expectedInterest: userInput['enteredExpectedInterest'],
      duration: userInput['enteredDuration'],
    };

    props.onCalculate(investmentData);

    setUserInput(initialUserInput);
  };

  const resetHandler = (event) => {
    setUserInput(initialUserInput);

    props.onReset(false);
  };

  return (
    <form className={styles['form']} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput['enteredCurrentSavings']}
            onChange={(event) =>
              inputChangeHandler('enteredCurrentSavings', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput['enteredYearlySavings']}
            onChange={(event) =>
              inputChangeHandler('enteredYearlySavings', event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput['enteredExpectedInterest']}
            onChange={(event) =>
              inputChangeHandler('enteredExpectedInterest', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput['enteredDuration']}
            onChange={(event) =>
              inputChangeHandler('enteredDuration', event.target.value)
            }
          />
        </p>
      </div>
      <p className={styles['actions']}>
        <button
          type="reset"
          className={styles['buttonAlt']}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles['button']}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
