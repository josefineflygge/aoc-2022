/*
2 DEC.

SCORES
Rock      1
Paper     2
Sciss     3
Lose      0
Draw      3
Win       6

______________

INPUT PT 1: 
first col: what your opponent will play (ABC), 
second col: what you should play in response (XYZ)

______________

INPUT PT 2: 
first col -- what your opponent will play (ABC)
second col -- if you will lose (X), draw (Y) or win (Z). 

______________

What would your total score be?
*/

const lineReader = require("readline").createInterface({
  input: require("fs").createReadStream("./input.txt"),
});

const scoreMap = {
  A: { X: 4, Y: 8, Z: 3 },
  B: { X: 1, Y: 5, Z: 9 },
  C: { X: 7, Y: 2, Z: 6 },
};

const scoreMapPt2 = {
  A: { X: 3, Y: 4, Z: 8 },
  B: { X: 1, Y: 5, Z: 9 },
  C: { X: 2, Y: 6, Z: 7 },
};

let score = 0;
let scorePt2 = 0;

lineReader.on("line", (line) => {
  [move, _, myMove] = line;
  score += scoreMap[move][myMove];
  scorePt2 += scoreMapPt2[move][myMove];
});

lineReader.on("close", () => {
  console.log("My tot score pt1: ", score);
  console.log("My tot score pt2: ", scorePt2);
});
