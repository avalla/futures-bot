import numeral from 'numeral';
function calculateAmount(price, cost) {
  const amount = numeral(cost).divide(price)
  return amount.value();

}

export default calculateAmount;