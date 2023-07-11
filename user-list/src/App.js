import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {
  const [userData, setUserData] = useState('');
  const [error, setError] = useState(false);

  const dataHandler = (userInput) => {
    if (userInput.name === '' || userInput.age === '') {
      return setError('Please enter a valid name and age (non-empty values)');
    } else if (userInput.age <= 0) {
      return setError('Please enter a valid age (> 0).');
    }

    setError(false);

    setUserData((prevInput) => {
      return [...prevInput, userInput];
    });
  };

  const closeHandler = (error) => {
    return setError(error);
  };

  return (
    <div>
      <AddUser onData={dataHandler} />
      {userData && <UserList users={userData} />}
      {error && <ErrorModal message={error} onClose={closeHandler} />}
    </div>
  );
}

export default App;
