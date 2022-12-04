/*
4 DEC.

INPUT
Each col per row contains a range of assignments for one elf in a pair.
Some of the pairs assignments fully contains the other. 
Ex) 2-8 fully contains 3-7, and 6-6 is fully contained by 4-6. 

OUTPUT
PT1 - In how many assignment pairs does one range fully contain the other?
PT2 - In how many assignment pairs do the ranges overlap?
*/

const { readFileSync } = require("fs");
const rows = readFileSync("input.txt", "utf-8").split(/\r?\n/);
let n_fully_overlaps = 0;
let n_partly_overlaps = 0;

rows.forEach((row) => {
  const pairs = row.split(",");
  const a = pairs[0].split("-");
  const b = pairs[1].split("-");
  const a1 = +a[0];
  const a2 = +a[1];
  const b1 = +b[0];
  const b2 = +b[1];

  // PT1
  if ((a1 >= b1 && a2 <= b2) || (b1 >= a1 && b2 <= a2)) n_fully_overlaps++;

  // PT2
  const a_fill = [...Array(a2 - a1 + 1).keys()].map((x) => x + a1);
  const b_fill = [...Array(b2 - b1 + 1).keys()].map((x) => x + b1);
  const overlaps =
    a_fill.some((a) => b_fill.includes(a)) ||
    b_fill.some((b) => a_fill.includes(b));

  n_partly_overlaps += overlaps ? 1 : 0;
});

console.log("Number of fully overlapping: ", n_fully_overlaps);
console.log("Number of partly overlapping: ", n_partly_overlaps);
