import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch: a toilet-roll holder that rations
// squares and charges interest on extras.
// Beat two: the holder keeps the ledger itself — interest today, tomorrow's ration pays the debt.
const PITCH =
  "A toilet-roll holder that rations exactly seven squares per visit, then charges interest on every extra sheet and deducts it from tomorrow's allowance.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
chmodSync("/output/entry.txt", 0o644);
