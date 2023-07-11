import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import Styles from './AddUser.module.css';

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    name: '',
    age: '',
  });

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onData(userInput);

    setUserInput({ name: '', age: '' });
  };

  return (
    <Card>
      <form className={Styles['user-form']} onSubmit={submitHandler}>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          value={userInput.name}
          onChange={(event) => changeHandler('name', event.target.value)}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          type="text"
          id="age"
          value={userInput.age}
          onChange={(event) => changeHandler('age', event.target.value)}
        ></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
