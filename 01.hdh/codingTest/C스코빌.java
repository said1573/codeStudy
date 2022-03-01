package codingTest;

import java.util.*;

public class C스코빌 {
    public static void main(String[] args) {

        int[] scovilles = new int[]{1, 2, 3, 9, 10, 12};
        int k = 7;

        C스코빌 coding = new C스코빌();
        coding.solution(scovilles, k);
    }
    public int solution(int[] scovilles, int k) {

        // 이미 스코빌지수가 K를 넘을 때
        Arrays.sort(scovilles);
        if(scovilles[0] > k) {
            return 0;
        }

        int mixCount = 0;

        ArrayList<Integer> arrayList = new ArrayList<>();
        // 배열을 리스트로 변환
        for(int scoville : scovilles) {
            arrayList.add(scoville);
        }

        while(true) {
            // 스코빌 지수가 k이상이 되었을 떄
            if(arrayList.get(0) > k) {
                break;
            }

            // 스코빌 지수가 k 이상이 될수 없을 떄
            if(arrayList.size() == 1 && arrayList.get(0) < k) {
                return -1;
            }
            scovilleMethod(arrayList);
            ++mixCount;

        }
        return mixCount;
    }

    public static ArrayList<Integer> scovilleMethod(ArrayList<Integer> arrayList) {

        int new_scovill = 0;
        new_scovill = (arrayList.get(0) + (arrayList.get(1) * 2));

        arrayList.add(new_scovill);
        arrayList.remove(1);
        arrayList.remove(0);

        Collections.sort(arrayList);

        return arrayList;
    }
}
