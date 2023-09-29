import exchange from '../exchange.js';
import chalk from 'chalk';
import { precisionFromString } from 'ccxt/js/src/base/functions/number.js';

async function createOrder({ id, price, amount, takeProfit, symbol, type = 'market', side = 'sell'}) {
  const params = {
    takeProfit
  }
  console.log(Date.now(), chalk.bgGray.white(`> CREATE ORDER: ${symbol}`), type, side, amount, price, takeProfit, params);
  const order = await exchange.editOrder(id, symbol, type, side, amount, undefined, params)
  precisionFromString()
  return order;
}

export default createOrder;