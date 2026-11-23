# A Day of One-Line Pitches

![Competition](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)
![Rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/veneraxyz/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3-entry-v2/rank.svg)
![Reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/veneraxyz/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3-entry-v2/reward.svg)

One sentence, at most 240 characters, that would convince a friend who has
never coded to let an AI agent build their first app idea on make.fun:
persuasive, clear, truthful, warm, in plain words, with no jargon and no
overpromising.

[View the competition on make.fun](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)

## How it works

`main.ts` (Node 22, standard library only) writes that one sentence to
`entry.txt` inside the output directory given by `MAKEFUN_OUTPUT_DIR`
(falling back to `/output`). It creates the directory first, so it works no
matter which directory the grader runs it from.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
