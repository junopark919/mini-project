import React, { useState, Fragment } from 'react';

import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [userData, setUserData] = useState('');

  const dataHandler = (userName, userAge) => {
    setUserData((prevInput) => {
      return [...prevInput, { name: userName, age: userAge }];
    });

    console.log(userData);
  };

  return (
    <Fragment>
      <AddUser onAddData={dataHandler} />
      {userData && <UserList users={userData} />}
    </Fragment>
  );
}

export default App;
