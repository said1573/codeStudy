// Complete the countSwaps function below.
function countSwaps(a) {

  let swapCnt = 0;
  console.log(`a: ${a}`);
  for (let j = 0; j < a.length; j++) {
    for (let i = 0; i < a.length-j-1; i++) {
      let curr = a[i];
      let next = a[i+1];
      if (curr > next) {
        swapCnt++;
        a[i] = next;
        a[i+1] = curr;
        console.log(`a: ${a}`);
      }
    }
  }

  a.reduce((result, item) => {

  });
  console.log(`Array is sorted in ${swapCnt} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length-1]}`);
}

function start() {
  input = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = countSwaps(input);
  console.log('결과: ', result);
  // console.log('정답: ', expectedResult);
  // console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});

var input = '3 2 1';
var input2 = null;
var expectedResult = 7;

// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17