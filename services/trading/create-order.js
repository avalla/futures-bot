import exchange from '../exchange.js';
import chalk from 'chalk';

async function createOrder({ price, amount, takeProfit, symbol, type = 'market', side = 'sell'}) {
  // const takeProfit = marketPrice + marketPrice * 0.5
  const params = {
    takeProfit: 20000
  }
  console.log(Date.now(), chalk.bgGray.white(`> CREATE ORDER: ${symbol}`), type, side, amount, price, takeProfit, params);
  const order = await exchange.createOrder(symbol, type, side, amount, price, params)
  return order;
}

export default createOrder;