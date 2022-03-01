package codingTest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

public class Test2 {

    public boolean solution(String[] phone_book) {

        ArrayList<String> lists = new ArrayList<>(Arrays.asList(phone_book));
        lists.sort(null);
        System.out.println(lists);

        for (int i = 0; i < lists.size(); i++) {
            if (i + 1 == lists.size()) {
                break;
            }
            System.out.println(lists.get(i));
            System.out.println(lists.get(i + 1));
            if ((lists.get(i + 1)).startsWith(lists.get(i))) {
                System.out.println("false");

                return false;
            }
        }
        System.out.println("true");
        return true;
    }


    public static void main(String[] args) {

        String[] string = new String[]{"119", "97674223", "1195524421"};
        Test2 test2 = new Test2();

        test2.solution(string);
    }
}