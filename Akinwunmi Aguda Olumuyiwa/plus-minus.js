'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let pos, neg, zero;
    pos = neg = zero = 0;
    arr.map((num) => num > 0 ? pos += 1 / arr.length
        : num < 0 ? neg += 1 / arr.length
        : num === 0 ? zero += 1 / arr.length : num)
    console.log(`${pos.toFixed(6)}
${neg.toFixed(6)}
${zero.toFixed(6)}`)
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}