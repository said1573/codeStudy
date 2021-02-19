// Complete the freqQuery function below.
function freqQuery(queries) {

  let hash = {};  // key 값
  let cnt = {};   //  key: 출연 횟수
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    const [action, value] = queries[i];
    // console.log(`action: ${action}, value: ${value}`);
    const beforeCnt = hash[value] || 0;
    if (action === 1) {
      hash[value] = beforeCnt + 1;
      cnt[beforeCnt] = (cnt[beforeCnt] || 0) - 1;
      cnt[beforeCnt+1] = (cnt[beforeCnt+1] || 0) + 1;
    } else if(action === 2 && beforeCnt > 0) {
      hash[value] = beforeCnt - 1;
      cnt[beforeCnt] = cnt[beforeCnt] - 1;
      cnt[beforeCnt-1] = cnt[beforeCnt-1] + 1;
    } else if(action === 3) {
      result.push(cnt[value] > 0 ? 1 : 0);
    }
  }

  return result;
}

/* 다른 사람 코드

const freqQuery = arr => {
  const result = [];
  const hash = {};
  const freq = [];

  for (let i = 0; i < arr.length; i += 1) {
    const [action, value] = arr[i];
    const initValue = hash[value] || 0;

    if (action === 1) {
      hash[value] = initValue + 1;

      freq[initValue] = (freq[initValue] || 0) - 1;
      freq[initValue + 1] = (freq[initValue + 1] || 0) + 1;
    }

    if (action === 2 && initValue > 0) {
      hash[value] = initValue - 1;

      freq[initValue - 1] += 1;
      freq[initValue] -= 1;
    }

    if (action === 3) result.push(freq[value] > 0 ? 1 : 0);
  }

  return result;
};

*/

function start() {
  console.log('result: ', freqQuery(testValue));
  console.log('output: ', output);
}

$( document ).ready(function() {
  // testValue = test.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  $('#txt_input').val(testValue); 
  start();
});


// var test = '1 2 2 4';
var testValue = [
  [1, 5],
  [1, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
  [2, 5],
  [3, 2],
];

var output = [0,1];