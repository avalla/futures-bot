import { version, bybit } from 'ccxt';

class Exchange {
  instance;
  constructor() {
    console.log('Starting CCXT...', version);
    const exchange = new bybit({
      apiKey: 'xxx',
      secret: 'xxx',
      options: {
        defaultType: 'swap',
      },
    });
    exchange.setSandboxMode(true);
    this.instance = exchange;
  }
}

const exchange = new Exchange();
await exchange.instance.loadMarkets();

Object.freeze(exchange);

export default exchange.instance;
