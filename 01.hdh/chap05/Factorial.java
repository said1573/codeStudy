package chap05;

import java.util.Scanner;

public class Factorial {

    public int FacorialResult(int number) {

        if (number > 0) {
            return number * FacorialResult(number - 1);
        } else {
            return 1;
        }
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("숫자 입력하세요");
        int number = scanner.nextInt();

        Factorial factorial = new Factorial();
        factorial.FacorialResult(number);

    }
}
