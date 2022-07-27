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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const denominator = arr.length;
  let vals = [0, 0, 0];
  arr.forEach((elmt) => {
    if (elmt < 0) {
      vals[1]++;
    } else if (elmt === 0) {
      vals[2]++;
    } else if (elmt > 0) {
      vals[0]++;
    }
  });
  vals.forEach((val) => {
    process.stdout.write(`${(val / denominator).toFixed(6)}\n`);
  });
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
