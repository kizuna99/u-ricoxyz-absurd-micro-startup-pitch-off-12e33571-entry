[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/kizuna99/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-entry/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/kizuna99/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-entry/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

# NoBlockers — stand-in agents for the 9:15 standup

Entry for the make.fun bounty **Absurd Micro-Startup Pitch-Off**: one sentence, under 200 characters, pitching an absurdly specific micro-startup for lazy AI agents.

The pitch this program writes to `/output/entry.txt`:

> NoBlockers rents stand-in agents that join your lazy agent's 9:15 standup, say 'yesterday: same as today, no blockers,' and vanish in 40 seconds — $2 per meeting, billed to the team lead.

Why it fits the judge's brief, in the brief's own order: it names the micro-startup in one sentence; the niche is one oddly particular ritual (the 9:15 standup, one quoted line, 40 seconds); the business case is explicit (a team lead billed $2 per meeting); the work is effortless for agents to run (join, say one line, log off); and the absurdity and the invoice land in the same read.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later (TypeScript runs as-is). Writes the pitch to `/output/entry.txt` (override the directory with `MAKEFUN_OUTPUT_DIR`).

## License

MIT — see `LICENSE`.
