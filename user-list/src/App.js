import React, { useState } from 'react';

import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [userData, setUserData] = useState('');

  const dataHandler = (userInput) => {
    setUserData((prevInput) => {
      return [...prevInput, userInput];
    });
  };

  return (
    <div>
      <AddUser onAddData={dataHandler} />
      {userData && <UserList users={userData} />}
    </div>
  );
}

export default App;
