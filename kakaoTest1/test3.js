function solution(key, lock) {
  var answer = false;

  // console.log('key:', key);

  // 키 0,0 가 위치할 lock 의 위치
  let rotatedKey = Object.assign([], key);
  answer = search(rotatedKey, lock);
  if (!answer) {
    lock = rotateKey(lock);
    lock = rotateKey(lock);
    answer = search(rotatedKey, lock);
  }
    
  return answer;
}

function search(rotatedKey, lock) {

  let rotateCnt = 0;
  let answer = false;
  while (rotateCnt < 4 && !answer) {
    for (var lockRow = 0; lockRow < lock.length; lockRow++) {
      for (var lockCol = 0; lockCol < lock[0].length; lockCol++) {
        if(matching(rotatedKey, lock, lockRow, lockCol)) {
          // console.log('is matched [${lockRow}][${lockCol}], rotateCnt ${rotateCnts}');
          answer = true;
          break;
        }
      }
      if (answer) { break; }
    }

    rotatedKey = rotateKey(rotatedKey);
    rotateCnt++;
  }
  return answer;
}

function matching(key, lock, lockRow, lockCol) {



  // console.log(copyLock);
  return !copyLock.some(row => row.some(col => col !== 1));
}

// 배열 회전
function rotateKey(key) {
  let tempArr = key.map(row => Object.assign([], new Array(row.length).fill(0)));

  for(var row = 0; row < key.length; row++) {
    for(var col = 0; col < key[0].length; col++) {
      let targetRow = col;
      let targetCol = key.length - 1 - row;
      tempArr[targetRow] = tempArr[targetRow] || [];
      tempArr[targetRow][targetCol] = key[row][col];

      // console.log('targetCol: [' + targetRow + '][' + targetCol + ']' +  key[row][col]);
    }
  }

  // console.log('rotated key: ', tempArr);

  return tempArr;
}

function start() {
  let result = solution(input, input2);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  // input = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  start();
});

var input = [[0, 0, 0], [1, 0, 0], [0, 1, 1]];
var input2 = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
var expectedResult = true;
