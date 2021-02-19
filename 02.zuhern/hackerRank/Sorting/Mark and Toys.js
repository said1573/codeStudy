// Complete the maximumToys function below.
function maximumToys(prices, k) {

  let sum = 0;
  let cnt = 0;
  prices.sort((a,b) => a - b);
  for (var i = 0; i < prices.length; i++) {
    let thisPrice = prices[i];
    if (sum + thisPrice > k) {
      break;
    } else {
      sum += thisPrice;
      cnt++;
    }
  }
  return cnt;
}


function start() {
  input = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = maximumToys(input, input2);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});

var input = '1 12 5 111 200 1000 10';
var input2 = 50;
var expectedResult = 7;

// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17