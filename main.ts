import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, max 240 chars: convince a friend who has never coded to
// let an AI agent build their first app idea on make.fun.
const sentence =
  "Just tell it the app you have been dreaming about in your own words, and a friendly AI builds it for you, no coding and no jargon, just your idea coming to life while you watch.";

// Guard: the entry must be one non-empty sentence of at most 240 chars.
if (sentence.trim().length === 0 || sentence.length > 240) {
  throw new Error("entry sentence must be 1-240 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), sentence + "\n", "utf8");
