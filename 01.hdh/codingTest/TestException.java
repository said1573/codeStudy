package codingTest;

public class TestException {
    public static void main(String[] args) {
        try {
            method1();
            System.out.println(6);
        } catch (Exception e) {
            System.out.println(7);
        }
    }

    static void method1() throws Exception {
        try {
            method2();
        } catch (NullPointerException e) {
            System.out.println(2);
            throw e;
        } catch (RuntimeException e) {
            System.out.println(3);
            throw e;
        }catch (Exception e) {
            System.out.println(4);
        }

        System.out.println(5);
    }

    static void method2() {
        throw new RuntimeException();
    }
}
