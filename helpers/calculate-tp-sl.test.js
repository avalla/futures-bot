import calculateTPSL from './calculate-tp-sl.js';
import calculatePrice from './calculate-price.js';
import calculateAmount from './calculate-amount.js';

describe('Calculate TP/SL', () => {
  it('SHORT (TP) | Amount #1 - Price: 26800 USDT | Cost: 100 USDT | Percentage: 50% => 25460 | Leverage: 5x', async () => {
    const price = 26800;
    const cost = 100;
    const percentage = 0.5;
    // 26800

    const amount = calculateAmount(price, cost); // 0.003
    // const takeProfitPrice = calculatePrice(amount, cost)
    const takeProfitAmount = await calculateTPSL(amount, percentage-1);
    expect(result).toBe(25460);
  });
});
