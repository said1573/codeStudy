import java.util.*;

public class 신고결과받기 {

    Map<String, Integer> userToDeclaration = new HashMap<>();

    public static void main(String[] args) {

        String[] id_list = new String[]{"muzi", "frodo", "apeach", "neo"};
        String[] report = new String[]{"muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"};
        int k = 2;

        신고결과받기 java = new 신고결과받기();
        java.solution(id_list, report, k);

    }

    public int[] solution(String[] id_list, String[] report, int k) {

        dataCheck(report);
        int[] result = dataCheck2(id_list);

        System.out.println("result = " + Arrays.toString(result));

        // k회 이상 신고당한 사람이 누구인지 저장
        List<String> name = new ArrayList<>();
        for (int i = 0; i < result.length; i++) {
            if (result[i] >= k) {
                name.add(id_list[i]);
            }
        }
        System.out.println("name = " + name);
        // 저장된 사람들을 신고한 사람에게 +1
        int[] answer = dataCheck3(name, id_list);

        // 정렬
        Arrays.sort(answer);
        System.out.println("answer = " + Arrays.toString(answer));
        return answer;
    }

    // 여러번 신고 했는지 확인을 위해 붙임처리
    public void dataCheck(String[] report) {

        for (int i = 0; i < report.length; i++) {
            String declaration = report[i].replace(" ", "");

            try {
                userToDeclaration.put(declaration, userToDeclaration.get(declaration) + 1);
            } catch (Exception e) {
                userToDeclaration.put(declaration, 1);
            }

        }
    }

    // 이용자별 신고 당한 횟수 확인
    public int[] dataCheck2(String[] id_list) {

        int[] checkDecla = new int[id_list.length];

        Set<String> keys = userToDeclaration.keySet();
        for (int i = 0; i < id_list.length; i++) {

            int count = 0;
            for (String key : keys) {
                if (key.endsWith(id_list[i])) {
                    count += 1;
                }
            }
            checkDecla[i] = count;

        }

        return checkDecla;
    }

    // name에 있는 사람을 신고한 사람이 누구인지 확인
    public int[] dataCheck3(List<String> name, String[] id_list) {

        int[] result = new int[id_list.length];
        Set<String> keys = userToDeclaration.keySet();
        for (int i = 0; i < name.size(); i++) {

            int count = 0;
            for (String key : keys) {

                System.out.println("key : " + key);
                System.out.println("name.get(i) : " + name.get(i));
                System.out.println("key : " + key);
                System.out.println("key : " + key);
                if (key.endsWith(name.get(i))) {
                    count += 1;
                }

            }

            result[i] = count;

        }

        return result;
    }
}
