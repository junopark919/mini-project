import React from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {
  return (
    <div>
      <AddUser />
      <UserList />
      <ErrorModal />
    </div>
  );
}

export default App;
