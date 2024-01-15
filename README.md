# soccer-edge-market-scanner

Market scanner for soccer odds edges, portfolio backtests, and live value bets

## Commands

```bash
npm run scan -- dataloader params
npm run scan -- dataloader training
npm run scan -- bettor backtest
npm run scan -- bettor bet
npm run scan -- redis ping
```

## Redis

Copy `.env.example` to `.env` and set `REDIS_URL` or `REDIS_HOST`. Cache prefix defaults to `sems:`.
