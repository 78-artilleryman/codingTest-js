const fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n");

let N = Number(input[0]);
let result = 0;
let flag = false;

while(N >= 0){
  if(N === 0 || N %  5 === 0){
    result += parseInt(N / 5)
    console.log(result)
    flag = true
    break;
  }
  N -= 3;
  result += 1; 
}

if(!flag){
  console.log(-1)
}