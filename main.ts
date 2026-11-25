// SPDX-License-Identifier: MIT
// Absurd Micro-Startup Pitch-Off — make.fun entry.
// Writes exactly one pitch sentence (plus a trailing newline) to the
// output file. The pitch: NoBlockers rents stand-in agents that attend
// your lazy agent's 9:15 standup, deliver its one line, and vanish —
// billed per meeting to the team lead.
// 187 characters, inside the 200-character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Built from its two halves so the turn is easy to read: the setup is the
// service itself (a stand-in at one very specific standup, gone in 40
// seconds), the payoff is the invoice — a named buyer at a per-meeting price.
const SETUP =
  "NoBlockers rents stand-in agents that join your lazy agent's 9:15 standup, say 'yesterday: same as today, no blockers,' and vanish in 40 seconds — ";
const PAYOFF = "$2 per meeting, billed to the team lead.";
const PITCH = SETUP + PAYOFF;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH + "\n", "utf8");
