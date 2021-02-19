// Complete the activityNotifications function below.
function activityNotifications (expenditure, d) {

  console.log(`expenditure: ${expenditure}`);
  // Number of notifications
  let n = 0

  // Set midpoints for median calculation
  let [ i1, i2 ] = [ Math.floor((d-1)/2), Math.ceil((d-1)/2) ]

  console.log(`i1 ${i1}`);
  console.log(`i2 ${i2}`);
  let m1, m2, m

  // Initialize count sorted subarray
  let cs = new Array(201).fill(0)
  for (let i = d-1; i >= 0; i--) {
    cs[expenditure[i]]++
  }

  console.log(`cs[expenditure[i]] ${cs}`)

  // Iterate through expenditures
  for (let i = d, l = expenditure.length; i < l; i++) {

      // Find median
      for (let j = 0, k = 0; k <= i1; k += cs[j], j++) {
        m1 = j;
        console.log(`k1 ${k}`);
      }
      for (let j = 0, k = 0; k <= i2; k += cs[j], j++) {
        m2 = j;
        console.log(`k2 ${k}`);
      }
      let m = (m1 + m2) / 2

      // Check if notification is given
      if (expenditure[i] >= m * 2) n++

      // Replace subarray elements
      cs[expenditure[i-d]]--
      cs[expenditure[i]]++
  }

  return n
}

/*
function activityNotifications(expenditure, d) {
  // d일 평균
  // 몇번 평균의 * 2 이상이 되는가
  console.log(`expenditure: ${expenditure}`);
  let cnt = 0;
  let compare = expenditure.splice(0, d);
  let mid = getMiddle(compare, d);
  while(expenditure.length) {
    // console.log(`compare: ${compare}`);
    // console.log(`expenditure: ${expenditure}`);
    
    let expend = expenditure[0];
    console.log(`mid: ${mid}, expend: ${expend}`);
    if (mid * 2 <= expend) {
      cnt++;
    }

    let removed = compare.shift();
    let added = expenditure.shift();
    compare.push(added);

    if (!((removed <= mid && added <= mid) || removed >= mid && added >= mid)) {
      mid = getMiddle(compare, d);
    }

    console.log(`mid: ${mid}`);
  }
  return cnt;
}

function getMiddle(compare, d) {
  let temp = Object.assign([], compare);
  let sorted = temp.sort((a,b) => a - b);
  if (d % 2) {
    // 홀수
    return sorted[Math.floor(d / 2)]
  } else {
    // 짝수
    let center = d / 2;
    return (sorted[center - 1] + sorted[center]) / 2
  }
}
*/

/*
function activityNotifications (expenditure, d) {

  // Number of notifications
  let n = 0

  // Set midpoints for median calculation
  let [ i1, i2 ] = [ Math.floor((d-1)/2), Math.ceil((d-1)/2) ]
  let m1, m2, m

  // Initialize count sorted subarray
  let cs = new Array(201).fill(0)
  for (let i = d-1; i >= 0; i--) cs[expenditure[i]]++

  // Iterate through expenditures
  for (let i = d, l = expenditure.length; i < l; i++) {

      // Find median
      for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j
      for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j
      let m = (m1 + m2) / 2

      // Check if notification is given
      if (expenditure[i] >= m * 2) n++

      // Replace subarray elements
      cs[expenditure[i-d]]--
      cs[expenditure[i]]++
  }

  return n
}

*/


function start() {
  inputArr = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = activityNotifications(inputArr, input2);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});

var input = '2 3 4 2 3 6 8 4 5';
var input2 = 5;
var expectedResult = 2;

// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17