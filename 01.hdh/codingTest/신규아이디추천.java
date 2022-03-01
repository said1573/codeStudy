package codingTest;

public class 신규아이디추천 {
    public static void main(String[] args) {

        String new_id = "abcdefghijklmn.p";
        신규아이디추천 java = new 신규아이디추천();
        java.solution(new_id);

    }

    public String solution(String new_id) {
        String answer = "";

        String level1Result = level1(new_id);
        System.out.println("result1 : " + level1Result);

        String level2Result = level2(level1Result);
        System.out.println("result2 : " + level2Result);

        String level3Result = level3(level2Result);
        System.out.println("result3 : " + level3Result);

        String level4Result = level4(level3Result);
        System.out.println("result4 : " + level4Result);

        String level5Result = level5(level4Result);
        System.out.println("result5 : " + level5Result);

        String level6Result = level6(level5Result);
        System.out.println("result6 : " + level6Result);

        String level7Result = level7(level6Result);
        System.out.println("result7 : " + level7Result);

        return answer;
    }

    // 모든 대문자를 대응되는 소문자로 치환합니다.
    public String level1(String id) {
        return id.toLowerCase();
    }

    // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    public String level2(String id) {
        return id.replaceAll("[^\\w\\d-_.]", "");
    }

    // 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    public String level3(String id) {
        return id.replaceAll("\\.{2,}", ".");
    }

    // 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    public String level4(String id) {
//        if (id.charAt(0) == '.') {
//            id = id.substring(1, id.length());
//        }
//
//        if (id.length() >= 2) {
//            if (id.charAt(id.length() - 1) == '.') {
//                id = id.substring(0, id.length() - 1);
//            }
//        }


        return id.replaceAll("^[.]|[.]$", "");
    }

    // 빈 문자열이라면, new_id에 "a"를 대입합니다.
    public String level5(String id) {
        if (id.equals("")) {
            return "a";
        }

        return id;
    }

    // 아이디의 길이가 16자 이상이므로, 처음 15자를 제외한 나머지 문자들이 제거되었습니다.
    public String level6(String id) {
        if (id.length() > 15) {
            return level4(id.substring(0, 15));
        }

        return id;
    }

    // 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    public String level7(String id) {
        if (id.length() <= 2) {
            String lastWord = String.valueOf(id.charAt(id.length() - 1));
            while (id.length() <= 2) {
                id = id + lastWord;
            }
        }

        return id;
    }
}
