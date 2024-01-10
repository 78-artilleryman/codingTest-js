const fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n")

let [a, b] = input[0].split(" ").map(el => +el);
let result = 1;
let flag = false;

while(a <= b){
  if(a === b){
    flag = true;
    
    break;
  }
  if(b % 2 === 0){
    b = parseInt(b / 2);
  }
  else if(b % 10 === 1){
    b = parseInt(b / 10);
  }
  else{
    break;
  }
  result++;
}

if(!flag){
  console.log(-1)
}
else{
  console.log(result)
}