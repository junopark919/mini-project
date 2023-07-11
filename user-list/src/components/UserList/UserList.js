import Card from '../UI/Card';

import Styles from './UserList.module.css';

const UserList = () => {
  return (
    <Card>
      <ul className={Styles['user-list']}>
        <li>Max (31 years old)</li>
      </ul>
    </Card>
  );
};

export default UserList;
