import numeral from 'numeral';

const NumberDisplay = ({ number }) => {
  const formattedNumber = numeral(number).format('0,0');

  return <div>{formattedNumber}</div>;
};

export default NumberDisplay;
