// One Word, First Thought: writes the single word "Coffee" to /output/entry.txt.
// Gate: exactly one word, 1 to 24 characters, UTF-8. Verified from the repo dir and from /tmp.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const word = "Coffee";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
