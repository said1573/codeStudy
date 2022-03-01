package codingTest;

class Solution {
    public int solution(int n) {
        int answer = 0;

        for (int startNum = 1; startNum < n + 1; startNum++) {
            answer += sum(startNum, n);
        }

        System.out.println("결과값 : " + answer);
        return answer;
    }

    public int sum(int startNum, int n) {
        int sum = 0;

        for (int i = startNum; i < n + 1; i++) {
            sum += i;

            if (sum == n) {
                return 1;
            }
        }

        return 0;
    }

    public static void main(String[] args) {
        long start = 0;
        long end = 0;

        start = System.currentTimeMillis();

        Solution solution = new Solution();
        solution.solution(100000);

        end = System.currentTimeMillis();
        System.out.println("실행 시간 : " + (end - start) / 1000.0 + "초");

    }
}