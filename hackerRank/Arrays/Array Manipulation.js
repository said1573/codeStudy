// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  var temp = new Array(n).fill(0);
  var max = 0;
  for (let i = 0; i < queries.length; i++) {
    let row = queries[i];
    temp[row[0]-1] += row[2];
    if (row[1] < n) {
      temp[row[1]] -= row[2];
    }
  }

  let sum = 0;
  for (let j = 0; j < n; j++) {
    sum += temp[j];
    max = Math.max(max, sum);
  }

  return max;
}


function start() {
  let input1 = input;
  // input1 = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = arrayManipulation(input2, input1);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});

// var input = [
//   [1, 2, 100],
//   [2, 5, 100],
//   [3, 4, 100]
// ];
var input = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1]
];
var input2 = 5;
var input2 = 10;
// var expectedResult = 200;
var expectedResult = 10;
