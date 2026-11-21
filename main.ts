import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `We trade the pen like a lit candle,
my hand to yours, the flame still burning.
You write the line I could not reach.
I sign beneath it, glad to follow.
Choosing is not holding on —
it is knowing when to let the next hand
finish the sentence.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "";
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
