function sherlockAndAnagrams(s) {
  let size = 1;
  let totalCnt = 0;
  while (size < s.length) {
    // // 조각 사이즈
    let startIdx = 0;
      let tempMap = {};
      for (let i = startIdx; i < s.length; i++) {
        let word = Array.from(s.slice(i, i + size)).sort().join('');
        if (word.length < size) { continue; }
        tempMap[word] = (tempMap[word] || 0) + 1;
      }

      console.log(tempMap);
      totalCnt += Object.values(tempMap).reduce((sum, cnt) => {
        sum += (cnt * (cnt - 1) / 2);
        return sum;
      }, 0)
    size++;
  }
  return totalCnt;
}

function start() {
  var test = $('#txt_input').val();
  console.log(sherlockAndAnagrams(test));
}

$( document ).ready(function() {
  let test2 = 'kkkk';
  $('#txt_input').val(test2); 
});