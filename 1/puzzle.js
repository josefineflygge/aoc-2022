/*
1 DEC.

INPUT: Calories elves carrying, one per line. Blank line separates elves inventory.
PT 1 OUTPUT: How many calories are being carried by the Elf carrying the most caloeries?
PT 2 OUTPUT: How many Calories are the top three Elves carrying in total?

*/
const lineReader = require("readline").createInterface({
  input: require("fs").createReadStream("./input.txt"),
});

let calories = [];
elf = 0;

lineReader.on("line", (line) => {
  const number = +line.trim();
  if (number) {
    calories[elf] = (calories[elf] || 0) + number;
  } else elf++;
});

lineReader.on("close", () => {
  let descending = calories.sort((a, b) => b - a);
  const top = descending[0];
  const topThree = top + descending[1] + descending[2];

  console.log("Top 1: ", top);
  console.log("Top 3: ", topThree);
});
