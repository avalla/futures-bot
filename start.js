import exchange from "./services/exchange.js";
import balance from './services/trading/balance.js';
import marketPrice from './services/trading/market-price.js';
import calculateAmount from './helpers/calculate-amount.js';
import configuration from './configuration.json' assert { type: 'json' };
import calculatePrice from './helpers/calculate-price.js';
import createOrder from './services/trading/create-order.js';
import setLeverage from './services/trading/set-leverage.js';
import calculateTPSL from './helpers/calculate-tp-sl.js';
async function start(options) {
    const { leverage, cost, symbol, side, dryRun } = options;
    const { takeProfit: percentage } = configuration.main;
    // if (dryRun) {
    //     exchange.setSandboxMode(true);
    // }
    await balance()
    const price = await marketPrice(symbol); // Estrae prezzo di mercato corrente
    const amount = calculateAmount(price, cost); // 0.00248402023848 -> 0.002
    await setLeverage(leverage, symbol);
    const takeProfit = calculateTPSL(price, percentage, side);
    const order = await createOrder({ takeProfit, symbol, amount });
    // Fetch order
    // Get entry price
    // Calcolare take profit: leverage, entryPrice, qtà, cost (100USDT), % takeprofit (50%, etc), LONG/SHORT -> 26700USDT

    // 100USDT (50%) -> 150USDT
    // COSTO (100USDT): VARIABILE
    // LEVA (10x): VARIABILE
    // ENTRY PRICE: VARIABILE
    // DA CALCOLARE TP/SL (50%/15%)

    // I * (1 + P) / L
    // 100 * (1 + 0.5) / 10 -> 150/10 = 15



    // createOrder(market) -> chiude a mercato (avra' un profitto 25%)
    // createOrder(livello 1) -> chiude a TP (avra' profitto 50%)
    // createOrder(livello 2) -> cancellato
    // programma monitora prezzo o ordine, il primo
}

export default start;