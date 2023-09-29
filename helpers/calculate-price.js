import numeral from 'numeral';
function calculatePrice(amount, cost, leverage) {
  const price = numeral(cost).divide(amount)//.multiply(leverage)
  return price.value();
}

export default calculatePrice;