var input1 = ['leo', 'kiki', 'eden'];
var input2 = ['eden', 'kiki'];
var result = 'leo';

// 다른 사람 풀이보고 내가 알아볼 수 있게 바꿔 봄 ㅠㅠ
var solution = (pData, cData) => 
  pData.find((pItem) => {
      console.log('1', cData[pItem]);
      // -- 는 해당 구문이 실행된 이후에 실행됌
      console.log('3', !cData[pItem]--);
      cData[pItem]++;
      return !cData[pItem]--;
    }
    , 
    cData.map(cItem => 
      cData[cItem] = (cData[cItem] | 0) + 1
    )
  );

// 다른 사람 풀이보고 내가 알아볼 수 있게 바꿔 봄 ㅠㅠ
var solution2 = (pData, cData) => 
    pData.find(pItem => 
        !cData[pItem]--
        , 
        cData.map(cItem => 
            cData[cItem] = (cData[cItem] | 0) + 1
        )
    )

function js_hash_1() {
  var result = solution(input1, input2);
  console.log('result : ' , result);
}

js_hash_1();