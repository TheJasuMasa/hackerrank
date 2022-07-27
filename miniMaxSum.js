"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let minArr = new Array(...arr);
  let maxArr = new Array(...arr);
  let minSum = null;
  let maxSum = null;

  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  });

  minArr.splice(minArr.indexOf(min), 1);
  maxArr.splice(maxArr.indexOf(max), 1);

  minSum = minArr.reduce((acc, elm) => {
    return acc + elm;
  }, 0);
  maxSum = maxArr.reduce((acc, elm) => {
    return acc + elm;
  }, 0);

  process.stdout.write(`${maxSum} ${minSum}`);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
