import { useState } from 'react';

import styles from './InvestmentForm.module.css';

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredCurrentSavings: '',
    enteredYearlySavings: '',
    enteredExpectedInterest: '',
    enteredDuration: '',
  });

  const currentChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredCurrentSavings: event.target.value };
    });
  };

  const yearlyChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredYearlySavings: event.target.value };
    });
  };

  const interestChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredExpectedInterest: event.target.value };
    });
  };

  const durationChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDuration: event.target.value };
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

    props.onCalculateHandler(investmentData);

    setUserInput({
      enteredCurrentSavings: '',
      enteredYearlySavings: '',
      enteredExpectedInterest: '',
      enteredDuration: '',
    });
  };

  const resetHandler = (event) => {
    setUserInput({
      enteredCurrentSavings: '',
      enteredYearlySavings: '',
      enteredExpectedInterest: '',
      enteredDuration: '',
    });

    props.onReset(false);
  };

  return (
    <form className={styles['form']} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            value={userInput['enteredCurrentSavings']}
            onChange={currentChangeHandler}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            value={userInput['enteredYearlySavings']}
            onChange={yearlyChangeHandler}
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            value={userInput['enteredExpectedInterest']}
            onChange={interestChangeHandler}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            value={userInput['enteredDuration']}
            onChange={durationChangeHandler}
          />
        </p>
      </div>
      <p className={styles['actions']}>
        <button
          type='reset'
          className={styles['buttonAlt']}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type='submit' className={styles['button']}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
