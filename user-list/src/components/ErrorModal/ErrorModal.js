import Card from '../UI/Card';
import Button from '../UI/Button';

import Styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const errorHandler = () => {
    props.onClose(false);
  };

  return (
    <div className={Styles['error-background']}>
      <Card className={Styles['error-modal']}>
        <h2>Invalid input</h2>
        <p>{props.message}</p>
        <div className={Styles['okay']}>
          <Button
            type="button"
            className={Styles['button']}
            onClick={errorHandler}
          >
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
