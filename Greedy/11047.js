const fs = require("fs");

let input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")

let N = Number(input[0].split(" ")[0])
let K = Number(input[0].split(" ")[1])

let arr = [];
let result = 0;

for(let i = 1; i <= N; i++){
  arr.push(Number(input[i]))
}

for(let i = N-1; i >= 0; i--){
  result += parseInt(K / arr[i]);
  K = K % arr[i];
}

console.log(result)

