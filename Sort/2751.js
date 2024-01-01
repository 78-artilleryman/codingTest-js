const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();

input.sort((a,b) => a-b)

console.log(input.join("\n"))