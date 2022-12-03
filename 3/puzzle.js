/*
3 Dec.

INPUT - 1 bag per row
Every item type can be converted to a priority:
Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
Each bag has a left and right compartment with one shared item.

PT 1

Find the item type that appears in both compartments of each rucksack. 
What is the sum of the priorities of those item types?

*/

const { readFileSync } = require("fs");
const rows = readFileSync("input.txt", "utf-8");
const bags = rows.split("\n");
let sum = 0;

for (let i = 0; i < bags.length; i++) {
  let priority;
  const bag = bags[i];

  const right = bag.slice(0, bag.length / 2).split("");
  const left = bag.slice(bag.length / 2, bag.length).split("");

  const shared_letter = right.find((l) => left.includes(l));

  if (shared_letter) {
    const is_lowercase = shared_letter === shared_letter.toLowerCase();
    if (is_lowercase) priority = shared_letter.charCodeAt(0) - 96;
    else priority = shared_letter.charCodeAt(0) - 38;
    sum += priority;
  }
}

console.log(sum);
