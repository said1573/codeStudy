// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  
  let cnt = 0;
  let freq = new Array(26).fill(0);

  const inc = (c, i) => freq[c.charCodeAt(0) - 'a'.charCodeAt(0)] += i;
  for (let c of a) { inc(c, 1); }
  for (let c of b) { inc(c, -1); }
  for (let f of freq) { cnt += Math.abs(f); }

  return cnt;
  
}

function start() {
  // input = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = makeAnagram(input, input2);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});

var input = 'cde';
var input2 = 'abc';
var expectedResult = 7;

// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17