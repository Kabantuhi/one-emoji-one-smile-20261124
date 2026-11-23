// One Emoji, One Smile entry (Node 22, standard library only): it writes
// exactly one emoji, and nothing else, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 8 characters that is not only white space,
// and the judge reads exactly the bytes written, so write no line end you do
// not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The emoji: two people hugging. The warmest single symbol that is not the
// default smiley: a hug reads as kind and friendly at first glance, any
// stranger reads it the same way, and it carries no irony or intimacy.
// One code point, four bytes, well inside the 8-character gate.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), '🫂');
