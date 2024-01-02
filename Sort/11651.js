const fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")

let N = Number(input.shift());
let arr =[];

for(let i = 0; i < N; i++){
  let [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y])
}

function numSort(a, b){
  if(a[1] !== b[1]){
    return  a[1] - b[1]
  }
  else{
    return  a[0] - b[0]
  }
}

arr.sort(numSort);

let answer = "";

for(let data of  arr){
  answer += data[0] + " " + data[1] + "\n";
}
console.log(answer)