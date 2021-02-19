// Complete the commonChild function below.
/*
 * 직전 까지의 경우의 수를 합쳐서 계산
 */
function commonChild(s1, s2) {
  let arr = Array(s1.length).fill(null).map(() => Array(s2.length).fill(0));
  for (let i = 0; i < s1.length; i++){
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        arr[i][j] = (arr[i][j] || 0) + 1;
        if (i && j) {
          arr[i][j] += arr[i-1][j-1];
        }
      } else {
        if (!i && !j) {
          arr[i][j] = 0;
        } else if (!i) {
          arr[i][j] = arr[i][j-1];
        } else if (!j) {
          arr[i][j] = arr[i-1][j];
        } else {
          arr[i][j] = Math.max(arr[i-1][j], arr[i][j-1]);
        }
      }
    }
  }

  return arr[s1.length-1][s2.length-1];
}



function start() {
  // input = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = commonChild(input, input2);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});
var input = 'HARRY'; //'MCB';
var input2 = 'SALLY'; // 'MAC';
var expectedResult = 2;

// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17