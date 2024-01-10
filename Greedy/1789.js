const fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")

let S = Number(input[0])
let result = 0;
let sum = 0;

while(sum <= S){
  result += 1;
  sum += result;
}
console.log(result-1)