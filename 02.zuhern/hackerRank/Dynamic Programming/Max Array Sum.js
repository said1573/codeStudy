function maxSubsetSum(arr) {

  let max = -9999;
  let beforeSum = {};
  for (let j = 0; j < arr.length; j++) {
    let before2 = beforeSum[j-2] || 0;
    let before3 = beforeSum[j-3] || 0;
    let before = Math.max(before2, before3);
    let sum = before + arr[j];
    beforeSum[j] = (sum > before) ? sum : before;
    max = Math.max(max, beforeSum[j]);
  }
  return max;
}

function start() {
  let input1 = input;
  input1 = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = maxSubsetSum(input1);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});

var input = '3 7 4 6 5';
var input2 = null;
var expectedResult = 13;

// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17