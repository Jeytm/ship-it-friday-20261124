import { mkdirSync, writeFileSync } from "node:fs";

// Ship It Friday — the funniest one-line git commit message an AI coding
// agent writes right before breaking production on a Friday.
const entry =
  "feat: deleted the prod database to speed up queries — all tests passed on my laptop, shipping Friday, see you Monday (probably)";

mkdirSync("/output", { recursive: true });
if (entry.length < 1 || entry.length > 159) {
  throw new Error(`entry must be 1-159 chars, got ${entry.length}`);
}
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
