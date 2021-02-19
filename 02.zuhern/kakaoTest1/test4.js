function test(s) {
  let answer = '';
  return answer;
}

function start() {
  // input = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = test(input);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});

var input = 'aabbaccc';
var input2 = null;
var expectedResult = 7;
