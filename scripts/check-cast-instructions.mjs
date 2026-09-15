import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Run from the repository root: node scripts/check-cast-instructions.mjs
const removed = /\bcast captions\b|--(?:captions-out|audio-out|timestamps-out|timestamps-format|granularity)\b|--format\s+(?:srt|vtt)\b/;
let checked = 0;
for (const root of ['skills', 'typecast-api-expert']) {
  for (const file of readdirSync(root, { recursive: true })) {
    if (!file.endsWith('.md')) continue;
    const path = join(root, file);
    assert.doesNotMatch(readFileSync(path, 'utf8'), removed, path);
    checked++;
  }
}
assert.doesNotMatch(readFileSync('README.md', 'utf8'), removed, 'README.md');
const shorts = readFileSync('skills/create-typecast-shorts/SKILL.md', 'utf8');
assert.match(shorts, /--out narration\.wav/);
assert.match(shorts, /--timestamp-out captions\.srt/);
assert.match(shorts, /--timestamp-format srt/);
console.log(`Cast instructions checked: ${checked + 1} Markdown files.`);
