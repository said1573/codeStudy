package codingTest;

import java.util.*;

public class C프린트 {
    public static void main(String[] args) {

        int[] priorities = new int[]{2, 1, 3, 2};
        int location = 2;

        C프린트 coding = new C프린트();
        coding.solution(priorities, location);
    }

    public int solution(int[] priorities, int location) {

        int answer = 0;
        int max    = 0;

        Queue<Integer> printQueue = new LinkedList<>();

        // 중요도가 가장 높은 값 확인 + priorities를 큐로 변경
        for(int i = 0; i < priorities.length; i++) {
            if(priorities[i] > max) {
                max = priorities[i];
            }
            printQueue.add(priorities[i]);
        }

        while(true) {
            if(printQueue.peek() == max) {
                break;
            } else {
                printQueue.add(printQueue.peek());
                printQueue.remove();
            }
        }

        System.out.println("resultPrintQueue : " + printQueue);
        System.out.println("4 : " + (printQueue.size() + location + 1));
        return answer;
    }
}
