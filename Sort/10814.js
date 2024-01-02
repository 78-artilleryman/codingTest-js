const fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")

const N = Number(input.shift());
arr = [];

for(let i = 0; i < N; i++){
  let age = Number(input[i].split(" ")[0]);
  let name = input[i].split(" ")[1];

  arr.push([age, name])
}

arr.sort((a,b) => a[0]-b[0]);

let answer = "";

for(let data of  arr){
  answer += data[0] + " " + data[1] + "\n";
}
console.log(answer)