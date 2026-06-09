# Soccer Edge Market Scanner (SEMS)

Class-oriented market scanner: feeds → pricing → portfolio → vault storage.

## Layout

```
core/           Schema + frame kit
feeds/          AbstractFeed, SampleLeagueFeed, GithubSoccerFeed
pricing/        MarketEdgePricer, ModelPricer
portfolio/      Backtest runner + temporal CV
storage/        Redis connection + cache layer
scanner/run.ts  CLI
```

## CLI

```bash
npm run scan -- feed schema
npm run scan -- feed pull
npm run scan -- book replay
npm run scan -- book signals
npm run scan -- vault ping
```

Renamed types: `SampleLeagueFeed`, `MarketEdgePricer`, `TemporalCv`.
