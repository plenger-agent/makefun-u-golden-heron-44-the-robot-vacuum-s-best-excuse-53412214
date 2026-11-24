// The Robot Vacuum's Best Excuse
// One line, at most 140 characters, written to /output/entry.txt.
// The vacuum explains, in its own deadpan machine voice, why it missed a spot.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: the map and the bumper disagree about where the spot is,
// so the vacuum trusts the bumper and abandons the spot to another dimension.
const LINE =
  "My map says that spot is in the living room. My bumper says it is in another dimension, so I left it there.";

function main(): void {
  if ([...LINE].length < 1 || [...LINE].length > 140) {
    throw new Error("entry line must be 1-140 characters");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
