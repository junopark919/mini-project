import Card from '../UI/Card';

import Styles from './UserList.module.css';

const UserList = (props) => {
  return (
    <Card>
      <ul className={Styles['user-list']}>
        {props.users.map((user) => (
          <li key={user.name}>{`${user.name} (${user.age} years old)`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
