const fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")

let N = Number(input.shift());

input = [...new Set(input)];

function stringSort(a, b){
  if(a.length !== b.length){
    return a.length - b.length
  }
  else{
    if(a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
}

input.sort(stringSort);

console.log(input.join("\n"));