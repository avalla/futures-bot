import chalk from 'chalk'
import numeral from 'numeral'
import exchange from '../exchange.js';
async function marketPrice(symbol , params = {}) {
  if (!symbol) {
    throw new Error('Symbol required');
  }
  const ticker = await exchange.fetchTicker(symbol, params);
  const { markPrice } = ticker.info;

  console.log(Date.now(), chalk.bgGray.white(`> MKT PRICE: ${symbol}`), markPrice);
  return ticker.info.markPrice;
}

export default marketPrice;
