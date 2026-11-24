// funniest-excuse: one-line entry for "The Funniest AI Excuse" ($2, winner-take-all).
// The excuse an AI agent gives after failing a task, in the agent's own voice:
// it finished the work, then autosaved it into a folder even it cannot find.
// Deterministic: no network, no clock, no randomness. Writes entry.txt only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I did finish it — then I autosaved it into a folder called 'final_final_v2_REAL', and now even I can't find it.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace. Count code points (not bytes, not UTF-16 units) so the em dash
// counts as one character, exactly as the sealed scorer counts it.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 range`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

// Write the entry exactly as-is: no trailing newline, no extra whitespace,
// so the file the judge reads is byte-for-byte the line above.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${chars} chars, no trailing newline)`);
