const fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
.toString()
.trim()
.split("\n");

let groups = input[0].split("-");
let result = 0;

for(let i = 0; i < groups.length; i++){
  let sum = groups[i].split("+").map(el => +el).reduce((a,b) => a + b);

  if(i === 0){
    result += sum;
  }
  else{
    result -= sum;
  }
}

console.log(result)

