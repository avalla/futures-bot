import exchange from '../exchange.js';
import chalk from 'chalk';

async function balance(balanceParams = { settle: 'USDT' }) {
  const balance = await exchange.fetchBalance(balanceParams);
  const { free } = balance[balanceParams.settle];
  console.log(Date.now(), chalk.bgGray.white(`> BALANCE: ${balanceParams.settle}`), free);
  return free;
}

export default balance;