import java.util.*;

public class 실패율 {

    public static void main(String[] args) {

        int N = 5;
        int[] stages = new int[]{2, 1, 2, 6, 2, 4, 3, 3};

        실패율 java = new 실패율();
        java.solution(N, stages);

    }

    public List<Integer> solution(int N, int[] stages) {
        int[] answer = new int[N];
        Map<Integer, Double> map = new HashMap<>();

        // stage별
        for (int level = 1; level <= N; level++) {

            int notClearCount  = 0;
            int challengeCount = 0;

            for (int j = 0; j < stages.length; j++) {
                // challenge count 구하기
                if (stages[j] >= level) {
                    challengeCount += 1;
                }

                // 실패한 사람 구하기
                if (stages[j] == level) {
                    notClearCount += 1;
                }
            }

            System.out.println("---- level ----: " + level);
            System.out.println("notClearCount  : " + notClearCount);
            System.out.println("challengeCount : " + challengeCount);
            double failRate = 0.0;

            try {
                failRate = (double) notClearCount / challengeCount;
            } catch (Exception e) {
                failRate = 0;
            }
            System.out.println(failRate);
            // System.out.println("stage         : " + (i + 1));

            map.put(level, failRate);
        }

        List<Integer> keySetList = new ArrayList<>(map.keySet());

        Collections.sort(keySetList, (o1, o2) -> map.get(o2).compareTo(map.get(o1)));
        System.out.println("map        : " + map);
        System.out.println("keySetList : " + keySetList);
        return keySetList;
    }
}
