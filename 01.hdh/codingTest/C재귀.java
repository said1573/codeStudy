package codingTest;

public class C재귀 {
    public static void main(String[] args) {

        int count = 10;
        solution(count);
    }

    public static int solution(int count) {
        if (count <= 0) {
            return count;
        } else {
            System.out.println("count : " + count);
        }
        return solution(--count);
    }
}
