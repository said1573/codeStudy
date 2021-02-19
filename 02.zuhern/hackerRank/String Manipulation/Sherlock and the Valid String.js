// Complete the isValid function below.
function isValid(s) {

  let freq = new Array(26).fill(0);
  let answer = false;
  // 문자당 출현 횟수 저장
  for (let c of s) {
    let cChar = c.charCodeAt(0) - 'a'.charCodeAt(0);
    freq[cChar] = (freq[cChar] || 0) + 1;
  }

  freq = freq.sort((a,b) => a - b);

  let curr = 0;
  let idx = 0;
  while (curr === 0) {
      curr = freq[idx];
      idx++;
  }
  idx -= 1;

  let max = freq[freq.length-1];
  let min = freq[idx];
  if (min === max) {
    // 처음과 마지막 갯수가 같음
    answer = true;
  } else {
    if((max - min === 1 && max - freq[freq.length-2] === 1 && freq[freq.length-2] === min)
    || (min === 1 && freq[idx+1] === max)) {
      answer = true;
    }
  }
  return answer ? 'YES' : 'NO';
}

// 삽질한 원인: 1 3 3 3 케이스 고려 못함..

function start() {
  // input = input.split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let result = isValid(input);
  console.log('결과: ', result);
  console.log('정답: ', expectedResult);
  console.log('맞춤: ', result === expectedResult);
}

$( document ).ready(function() {
  start();
});

var input = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd';
var input2 = null;
var expectedResult = 7;

// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17