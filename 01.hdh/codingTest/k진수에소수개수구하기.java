import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class k진수에소수개수구하기 {
    public static void main(String[] args) {

        int n = 437674;
        int k = 3;

        k진수에소수개수구하기 test = new k진수에소수개수구하기();
        test.solution(n, k);

    }

    public int solution(int num, int k) {
        int answer = 0;

        String ans = "";
        while (num > 0) {
            ans = (num % k) + ans;
            num /= k;
        }

        int[] resultArray = new int[]{OPO(ans), PO(ans), OP(ans), P(ans)};

        for (int i = 0; i < resultArray.length; i++) {
            answer += resultArray[i];
        }

        System.out.println("ans : " + ans);
        System.out.println(OPO("10"));
        return answer;
    }

    public int OPO(String number) {

        int result = 0;

        String regEx = "0\\d+0";

        Pattern pattern = Pattern.compile(regEx);
        Matcher matcher = pattern.matcher(number);

        while (matcher.find()) {
            System.out.println(matcher.group());
//            String findNum = matcher.group();
//            System.out.println("findNum : " + findNum);
//            if (isPrime(findNum) == true) {
//                result += 1;
//            }
        }
//        System.out.println("OPO result : " + result);
        return result;
    }

    public int PO(String number) {
        int result = 0;
        return result;
    }

    public int OP(String number) {
        int result = 0;
        return result;
    }

    public int P(String number) {
        int result = 0;
        return result;
    }

    public boolean isPrime(String num) {
        int number = Integer.parseInt(num);

        for (int i = 2; i <= (int) Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }
}
