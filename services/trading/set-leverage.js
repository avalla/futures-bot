import exchange from '../exchange.js';

async function setLeverage(leverage, symbol, params = {}) {
  try {
    const response = await exchange.setLeverage(leverage, symbol, params = { marginMode: 'cross' });
    console.log(response)
    return true
  } catch (err) {
    console.log(err);
    return true;
  }
}

export default setLeverage;