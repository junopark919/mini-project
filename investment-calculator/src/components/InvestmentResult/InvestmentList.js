const InvestmentList = (props) => {
  return (
    <>
      <tr>
        <td>{props.year.toLocaleString('en-US')}</td>
        <td>${props.totalSavings.toLocaleString('en-US')}</td>
        <td>${props.yearlyInterest.toLocaleString('en-US')}</td>
        <td>${props.totalInterest.toLocaleString('en-US')}</td>
        <td>${props.investedCapital.toLocaleString('en-US')}</td>
      </tr>
    </>
  );
};

export default InvestmentList;
