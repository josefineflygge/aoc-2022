/*
6 DEC.

INPUT: A stream of characters.
Identify the first position where the four most recently received characters were all different.

OUTPUT PT1: How many characters need to be processed before the first start-of-packet marker is detected? (7 distinct chars)
OUTPUT PT2: How many characters need to be processed before the first start-of-message marker is detected? (14 distinct chars)

*/
const { readFileSync } = require("fs");
const stream = readFileSync("input.txt", "utf-8").split("");

const n_distinct_characters = 4; //PT1 -> 4, PT2 -> 14
let first_chunk = [...stream.slice(0, n_distinct_characters)];
let processed = [...first_chunk];
let chunk = [...first_chunk];

for (i = n_distinct_characters - 1; i <= stream.length; i++) {
  processed.push(stream[i]);
  chunk.shift();
  chunk.push(stream[i]);

  if (chunk.every((c) => chunk.indexOf(c) === chunk.lastIndexOf(c))) break;
}

console.log("Characters processed before marker: ", processed.length - 1);
