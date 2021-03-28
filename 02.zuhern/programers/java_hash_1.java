import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public boolean solution(String[] phone_book) {
        
        boolean answer = true;  // 중복 있으면 false
        ArrayList<String> list = new ArrayList<>(Arrays.asList(phone_book));

        // 0 - n , 0 - n 비교
        // 버블로 비교하니 효율성 3번 통과 못함..
        // 전체 탐색으로 하고 length = 20 제외하는 것이 더 빠름..
        for (int frstIdx = 0; frstIdx < list.size(); frstIdx++) {
            String frstStr = list.get(frstIdx);
            if (frstStr.length() == 20) { continue; }
            for (int scndIdx = 0; scndIdx < list.size(); scndIdx++) {
                // 동일 index 비교 제외
                if (frstIdx == scndIdx) { continue; }
                String scndStr = list.get(scndIdx);
                // 접두어 체크
                if (scndStr.startsWith(frstStr)) {
                    answer = false;
                    break;
                }
            }
            // 이미 false 도출되었으니 break;
            if (!answer) {
                break;
            }
        }
        return answer;
    }
    
}