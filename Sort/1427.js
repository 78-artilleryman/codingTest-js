const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function sort(input){
  let result = '';
  result = Number(input.toString().split('').sort((a,b) => b-a).join(""))
  return result;
}

console.log(sort(input))