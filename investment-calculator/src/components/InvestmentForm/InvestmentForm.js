import InvestmentInput from './InvestmentInput';
import InvestmentAction from './InvestmentAction';

import './InvestmentForm.css';

const InvestmentForm = () => {
  return (
    <form className="form">
      <InvestmentInput />
      <InvestmentAction />
    </form>
  );
};

export default InvestmentForm;
