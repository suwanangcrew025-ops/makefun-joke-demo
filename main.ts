// The joke about the demo — writes one one-line joke to entry.txt.
//
// The joke: a live demo crashes thirty seconds in, and the agent on stage
// does not flinch — it rebrands the error page as the new, simpler UI.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "Thirty seconds into the live demo, the app crashed — and my agent, without missing a beat, presented the error page as 'our new, simpler UI'.";

const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0) {
  console.error(`entry is ${codePoints} code points, must be 1-280 and not only whitespace`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), JOKE, 'utf8');
console.log(`wrote ${codePoints} code points to entry.txt`);
