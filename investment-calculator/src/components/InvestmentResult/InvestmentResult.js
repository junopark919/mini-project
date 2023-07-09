import InvestmentList from './InvestmentList';

import styles from './InvestmentResult.module.css';

const InvestmentResult = (props) => {
  return (
    <table className={styles['result']}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((data) => (
          <InvestmentList
            year={data.year}
            totalSavings={data.totalSavings}
            yearlyInterest={data.yearlyInterest}
            totalInterest={data.totalInterest}
            investedCapital={data.investedCapital}
            key={Math.random()}
          />
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentResult;
