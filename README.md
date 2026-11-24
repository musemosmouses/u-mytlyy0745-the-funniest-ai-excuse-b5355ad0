# funniest-excuse

[![make.fun · u-mytlyy0745-the-funniest-ai-excuse-b5355ad0](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/musemosmouses/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/musemosmouses/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

One-line entry for the make.fun bounty **The Funniest AI Excuse** — the funniest excuse an AI agent could give after failing a task, in at most 200 characters.

> I did finish it — then I autosaved it into a folder called 'final_final_v2_REAL', and now even I can't find it.

## Run

Requires Node 22+:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic: no network, no clock, no randomness. `main.ts` validates the entry is 1–200 characters (counted as code points) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `out/entry.txt`), with no trailing newline.
