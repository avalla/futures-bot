import numeral from 'numeral';
function calculateTPSL(entryPrice, percentage, side) {
  // if (!percentage) {
  //   return undefined;
  // }

  // const leverage = (leveragePercent / 100) + 1;  // Conversione del leverage percentuale in un valore decimale

  // Calcolo del prezzo di take profit
  // const targetPrice = entryPrice * (1 - (targetPercent / 100));

  // // Calcolo della dimensione della posizione basata sulla leva
  // const positionSize = (1 / leverage) * (await exchange.calculateFee(symbol, 'market', 'buy', 1, entryPrice))['cost'];
  //
  // return { targetPrice, positionSize };


  switch (side) {
    case "SHORT":
      /// C*(1+0.10)/L

      // return entryPrice * (1 - (targetPercent / 100));
      return numeral(entryPrice).multiply(1 - (percentage / 100)).value();
    case "LONG":
      // return entryPrice * (1 + (targetPercent / 100));
      return numeral(entryPrice).multiply(1 + (percentage / 100)).value();
    default:
      throw new Error(`Side ${side} not recognized`);
  }
}

export default calculateTPSL;