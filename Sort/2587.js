const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = 0;
const midnum = input.sort((a,b) => a-b);

for(let i = 0; i < midnum.length; i++){
  result += Number(midnum[i])
}

console.log(result / input.length);
console.log(midnum[2])
