// Complete the countTriplets function below.
function countTriplets(arr, r) {
  // 등배수열 만들수 있는 경우의 수 구하기
  // 배율
  let arr2 = {};  // 2개 조합
  let arr3 = {};  // 3개 조합
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    count += (arr3[num] || 0);
    arr3[num * r] = (arr3[num * r] || 0) + (arr2[num] || 0);
    arr2[num * r] = (arr2[num * r] || 0) + 1;
  }

  return count;
}

var testValue;
function start() {
  console.log('result: ', countTriplets(testValue, 1));
}

$( document ).ready(function() {
  let test = '1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1';
  testValue = test.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  $('#txt_input').val(testValue); 
  start();
});