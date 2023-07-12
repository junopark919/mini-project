import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    name: '',
    age: '',
  });
  const [error, setError] = useState('');

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      userInput.name.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    if (+userInput.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddData(userInput);

    setUserInput({ name: '', age: '' });
  };

  const closeHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor='name'>Username</label>
          <input
            type='text'
            id='name'
            value={userInput.name}
            onChange={(event) => changeHandler('name', event.target.value)}
          ></input>
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='number'
            id='age'
            value={userInput.age}
            onChange={(event) => changeHandler('age', event.target.value)}
          ></input>
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
