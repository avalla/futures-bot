import calculateAmount from './calculate-amount.js';

describe('Calculate amount', () => {
  it('Amount #1 - Price: 26800 USDT | Cost: 100 USDT => 0.003', async () => {
    const price = 26800;
    const cost = 100;
    const amount = await calculateAmount(price, cost);
    expect(amount).toBe(0.003);
  });
});
