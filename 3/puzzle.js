/*
3 DEC.

INPUT - 1 bag per row
Every item type can be converted to a priority:
Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
Each bag has a left and right compartment with one shared item.

PT 1
Find the item type that appears in both compartments of each rucksack. 

__________

PT 2
Every set of three lines in your list corresponds to a single group, 
but each group can have a different badge item type.

Find the item type that corresponds to the badges of each three-Elf group 
(only item that appears in all three bags)

_________


What is the sum of the priorities of those item types?

*/

const { readFileSync } = require("fs");
const rows = readFileSync("input.txt", "utf-8");
const bags = rows.split(/\r?\n/);
let sum_pt1 = 0;
let sum_pt2 = 0;

const letterPrio = (l) => {
  const is_lowercase = l === l.toLowerCase();
  return l.charCodeAt(0) - (is_lowercase ? 96 : 38);
};

// PT 1
for (let i = 0; i < bags.length; i++) {
  const bag = bags[i];

  const right = bag.slice(0, bag.length / 2).split("");
  const left = bag.slice(bag.length / 2, bag.length).split("");

  const shared_letter = right.find((l) => left.includes(l));

  if (shared_letter) sum_pt1 += letterPrio(shared_letter);
}

// PT 2
for (let i = 0; i < bags.length; i = i + 3) {
  const bag_1 = bags[i].split("");
  const bag_2 = bags[i + 1].split("");
  const bag_3 = bags[i + 2].split("");

  const intersection = bag_1.find(
    (l) => bag_2.includes(l) && bag_3.includes(l)
  );

  sum_pt2 += letterPrio(intersection);
}

console.log("PT1 SUM: ", sum_pt1);
console.log("PT2 SUM: ", sum_pt2);
