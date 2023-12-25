let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);

let arr = Array(N)
  .fill(1)
  .map((a, b) => a + b);

for (let x = 1; x <= M; x++) {
  let [i, j] = input[x].split(" ").map((el) => +el);

  let temp = arr[i - 1];
  arr[i - 1] = arr[j - 1];
  arr[j - 1] = temp;
}

console.log(arr.join(" "));
