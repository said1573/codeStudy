// Complete the largestRectangle function below.
function largestRectangle(h) {
  let max = 0;
  for (let i = 0; i < h.length; i++) {
    let height = h[i];
    let width = 1;
    while (i + width < h.length) {
      height = Math.min(height, h[i + width]);
      width++;
      let area = height * width;
      max = Math.max(max, area);
      if (max < area) {
        break;
      }
    }
  }
  return max;
}

function start() {
  let input1 = input;
  input1 = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = largestRectangle(input1);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});

var input = '1 2 3 4 5';
var input2 = null;
var expectedResult = 9;

// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17