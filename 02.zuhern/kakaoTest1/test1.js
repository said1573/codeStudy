function test(s) {

  let targetArr = Array.from(s);
  let min = targetArr.length;
  for(let size = 1; size < (targetArr.length/2+1); size++) {
    let tempArr = Object.assign([], targetArr);
    let beforeTxt = '';
    let resultTxt = '';
    let cnt = 0;
    console.log('size: ', size);
    while (tempArr.length) {
      let currTxt = tempArr.splice(0, size).join('');
      if (currTxt === beforeTxt) {
        cnt++;
      } else {
        resultTxt += (cnt < 2 ? '' : cnt) + beforeTxt;
        beforeTxt = currTxt;
        cnt = 1;
      }

      if (!tempArr.length) {
        resultTxt += (cnt < 2 ? '' : cnt) + currTxt;
      }
      console.log('resultTxt: ', resultTxt);
    }
    min = Math.min(resultTxt.length, min);
  }

  return min;
}

// 다른 사람의 풀이
// const solution = s => {
//   const range = [...Array(s.length)].map((_, i) => i + 1);
//   return Math.min(...range.map(i => compress(s, i).length));
// };

// const compress = (s, n) => {
//   const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
//   return make(
//     chunk(s, n).reduce(
//       ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
//       ['', '', 0]
//     )
//   );
// };

// const chunk = (s, n) =>
//   s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];


function start() {
  let result = test(testValue);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  // testValue = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  testValue = input;
  console.log('입력: ', testValue);
  $('#txt_input').val(testValue, 2); 
  start();
});

var testValue;
var input = 'ababcdcdababcdcd';
var input2 = null;
var expectedResult = 9;

// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17