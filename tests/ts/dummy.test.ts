import { describe, expect, it } from "vitest";
import { SampleLeagueFeed } from "../../feeds/sampleLeagueFeed.js";
import { MarketEdgePricer } from "../../pricing/marketEdgePricer.js";
import { columnNames } from "../../core/schema.js";

describe("SampleLeagueFeed", () => {
  it("extracts training data with williamhill odds", () => {
    const loader = new SampleLeagueFeed();
    const [X, Y, O] = loader.extractTrainData(0, "williamhill");
    expect(X.index.length).toBeGreaterThan(0);
    expect(columnNames(Y).every((c) => c.startsWith("output__"))).toBe(true);
    expect(O).not.toBeNull();
    expect(columnNames(O!).every((c) => c.includes("williamhill"))).toBe(true);
  });

  it("lists odds types", () => {
    const loader = new SampleLeagueFeed();
    expect(loader.getOddsTypes()).toEqual(["interwetten", "williamhill"]);
  });
});

describe("MarketEdgePricer", () => {
  const loader = new SampleLeagueFeed();
  const [X, Y, O] = loader.extractTrainData(0, "williamhill");

  it("fits with default odds types", () => {
    const bettor = new MarketEdgePricer();
    bettor.fit(X, Y);
    expect(bettor.oddsTypes_.sort()).toEqual(["interwetten", "williamhill"]);
  });

  it("predicts value bets", () => {
    const bettor = new MarketEdgePricer(["williamhill"], 0.03);
    bettor.fit(X, Y);
    const bets = bettor.bet(X, O!);
    expect(bets.length).toBe(X.index.length);
    expect(bets[0]?.length).toBe(bettor.bettingMarkets_.length);
  });
});
