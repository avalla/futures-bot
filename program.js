import { Command } from 'commander';
import numeral from 'numeral';
import start from './start.js';
import banner from './banner.js';
import configuration from './configuration.json' assert { type: 'json' };
import pkg from './package.json' assert { type: 'json' };

const program = new Command();
program.version(pkg.version);

console.log(banner);

function float(value) {
  if (isNaN(value)) {
    throw new program.InvalidOptionArgumentError('Not a number.');
  }
  return numeral(value).value();
}
program
  .option('-d, --dry-run', 'use testnet, for testing', true)
  .option('-s, --side <side>', 'side <SHORT|LONG>', configuration.defaults.side)
  .option('-l, --leverage <leverage>', 'leverage, 10 is 10x', float, configuration.defaults.leverage)
  .option('-c, --cost <cost>', 'USDT amount that you want to spend', float, configuration.defaults.cost)
  .option('-s, --symbol <symbol>', 'symbol (e.g BTCUSDT, ETHUSDT, etc)', 'BTCUSDT')
  .action(start);
await program.parseAsync(process.argv);


if (!process.argv.slice(2).length) {
    program.help();
    process.exit();
}
