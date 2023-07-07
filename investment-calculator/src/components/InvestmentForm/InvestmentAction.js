import './InvestmentAction.css';

const InvestmentAction = () => {
  return (
    <p className="actions">
      <button type="reset" className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  );
};

export default InvestmentAction;
