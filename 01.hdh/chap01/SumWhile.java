package chap01;

import java.util.Scanner;

public class SumWhile {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("값을 입력 : ");
        int number = scanner.nextInt();
        int sum = 0;

        while(true) {
            sum += number;
            number -= 1;

            if(number != 0) {
                System.out.println(number);
                continue;
            } else {
                System.out.println("전체 합계는 : " + sum + " 입니다.");
                return;
            }
        }
    }
}
