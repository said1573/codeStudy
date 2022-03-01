import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

// 1032번
public class 명령프롬프트 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("개수 입력 : ");
        int count = scanner.nextInt();

        List<String> list = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            String word = scanner.nextLine();
            list.add(word);
        }

        boolean[] check = new boolean[list.get(0).length()];
//        for (int i = 0; i < list.size(); i++) {
//            String word = list.get(i);
//
//            String[] temp = new String[word.length()];
//            for (int j = 0; j < word.length(); j++) {
//
//            }
//        }
        System.out.println(Arrays.toString(check));

    }




}
