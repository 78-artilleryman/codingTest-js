const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(" ").map(el => +el);

let result = input[1].split(" ").map(el => +el);
result.sort((a,b) => a - b);

console.log(result[result.length - m])