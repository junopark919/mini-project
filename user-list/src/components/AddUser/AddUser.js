import Card from '../UI/Card';
import Button from '../UI/Button';

import Styles from './AddUser.module.css';

const AddUser = () => {
  return (
    <Card>
      <form className={Styles['user-form']}>
        <label htmlFor="name">Username</label>
        <input type="text" id="name"></input>
        <label htmlFor="age">Age (Years)</label>
        <input type="text" id="age"></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
