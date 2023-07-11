import Card from '../UI/Card';
import Button from '../UI/Button';

import Styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <Card className={Styles['error-modal']}>
      <h2>Invalid input</h2>
      <p>Please enter a valid age (> 0).</p>
      <div className={Styles['okay']}>
        <Button className={Styles['button']}>Okay</Button>
      </div>
    </Card>
  );
};

export default ErrorModal;
