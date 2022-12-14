/*
5 DEC.

INPUT: 
Stacked crates in a number of rows. 
Followed by moves where each line is an instruction to move x number of crates from column y to column z.

EXAMPLE
______________________

    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2

______________________

OUTPUT: After the rearrangement procedure completes, what crate ends up on top of each stack?
*/
const { readFileSync } = require("fs");
const input = readFileSync("input.txt", "utf-8").split(/\r?\n/);

const divider = input.indexOf("");
const moves = input.splice(divider).filter(Boolean);
const rows = input;

const n_stacks = Math.ceil(rows[0].length / 4);
const stacks = [...Array(n_stacks).fill([])];

rows.forEach((row) => {
  let n = 0;
  for (i = 1; i < row.length; i += 4) {
    if (/[A-Z]/g.test(row[i])) stacks[n] = [...stacks[n], row[i]];
    n++;
  }
});

moves.forEach((move) => {
  const numbers = move.match(/\d+/g);

  const n_crates = +numbers[0];
  const from = +numbers[1] - 1;
  const to = +numbers[2] - 1;
  const crates_to_move = stacks[from].splice(0, n_crates);

  //P1
  stacks[to].unshift(...crates_to_move.reverse());

  //P2 -- replace line above with: stacks[to].unshift(...crates_to_move);
});

const top_crates = stacks.map((stack) => stack[0]).join("");

console.log("Crates on top of each stack ", top_crates);
