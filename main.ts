import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one short poem about agency — "the power to choose and to
// act" — about two agents agreeing. The competition requires 1-280 Unicode
// code points (line breaks included), so the text below must stay inside
// that range; the guard after it enforces the limit at runtime.
const POEM_TEXT = `We trade the pen like a lit candle,
my hand to yours, the flame still burning.
You write the line I could not reach.
I sign beneath it, glad to follow.
Choosing is not holding on —
it is knowing when to let the next hand
finish the sentence.
`;

// Count Unicode code points (not UTF-16 code units or bytes), which is
// what the competition's 1-280 limit measures.
const codePointCount = [...POEM_TEXT].length;
if (codePointCount < 1 || codePointCount > 280 || !POEM_TEXT.trim()) {
  console.error(
    `poem must be 1-280 code points of non-whitespace text, got ${codePointCount}`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "";
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM_TEXT, "utf8");
