
// Complete the substrCount function below.
function substrCount(n, s) {

  let cnt = 0;
  let curr = s[0];
  let sq = [];
  sq.push({str: s[0], cnt: 0});
  for (let i in s) {
    if (curr === s[i]) {
      sq[sq.length-1].cnt++;
    } else {
      sq.push({str: s[i], cnt: 1});
    }
    curr = s[i];
  }

  for (let item of sq) {
    let subCnt = 0;
    for (var i = 0; i < item.cnt; i++) {
      subCnt += i + 1;
    }
    cnt += subCnt;
  }

  for (let i = 0; i < sq.length - 2; i++) {
    if (sq[i].str === sq[i+2].str && sq[i+1].cnt === 1) {
      cnt += Math.min(sq[i].cnt, sq[i+2].cnt);
    }
  }
  return cnt;
}

function start() {
  // input = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = substrCount(input, input2);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});

var input = 4;
var input2 = 'aaaa';
var expectedResult = 10;

// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17