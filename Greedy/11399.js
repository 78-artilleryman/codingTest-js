const fs = require("fs");

let input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")


let N = Number(input[0])
let P = input[1].split(" ").map(el => +el)

P.sort((a,b) => a-b)

let sum = 0;
let result = 0;

for(let i  = 0; i < N; i++){
  sum += P[i];
  result += sum;
}

console.log(result)
